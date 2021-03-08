FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN curl -sL https://deb.nodesource.com/setup_15.x |  bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.sln .
COPY Core/*.csproj ./Core/
COPY Indexer/*.csproj ./Indexer/
COPY MTBC/*.csproj ./MTBC/
COPY Web/*.csproj ./Web/
COPY Workflow/*.csproj ./Workflow/
COPY Test/*.csproj ./Test/
RUN dotnet restore

# copy everything else and build app
COPY Core/. ./Core/
COPY Indexer/. ./Indexer/
COPY MTBC/. ./MTBC/
COPY Web/. ./Web/
COPY Workflow/. ./Workflow/
COPY Test/. ./Test/
WORKDIR /source/Web
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "Web.dll"]
