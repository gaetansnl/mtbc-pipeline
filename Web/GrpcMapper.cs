using AutoMapper;
using System;
using Google.Protobuf.Collections;
using Google.Protobuf.WellKnownTypes;

namespace Web
{
    public class GrpcMapper : Profile
    {
        public GrpcMapper()
        {
            CreateMap<Core.Doi.DoiCitation, Study>(MemberList.None);
            CreateMap<Core.Doi.DoiCitation.Author, Author>(MemberList.None);
            CreateMap<Core.Ncbi.NcbiExperiment, NcbiExperiment>(MemberList.None);
            CreateMap<Core.Ncbi.NcbiRun, NcbiRun>(MemberList.None);
            CreateMap<Core.Ncbi.NcbiSample, NcbiSample>(MemberList.None);
            CreateMap<Core.Ncbi.NcbiStudy, NcbiStudy>(MemberList.None);
            
            CreateMap<Indexer.Data.SnpData, Snp>(MemberList.None);
            CreateMap<Indexer.Data.SnpData.Annotation, SnpAnnotation>(MemberList.None);
            CreateMap<Indexer.Data.AnalysisData, StrainResult>(MemberList.None);
            CreateMap<Indexer.Data.AnalysisData.InsertionSequence, InsertionSequence>(MemberList.None);
            CreateMap<Indexer.Data.AnalysisData.InsertionSequence.PrefixedPosition, InsertionSequencePosition>(MemberList
                .None);
            // Fix problem with oneof
            CreateMap<Indexer.Data.CrisprPartData, CrisprPart>(MemberList.None).ForAllMembers(opts =>
                opts.Condition((src, dest, srcMember) => srcMember != null));
            CreateMap<Indexer.Data.CrisprPartData.SequencePart, SequenceCrisprPart>(MemberList.None);
            CreateMap<Indexer.Data.CrisprPartData.SpacerPart, SpacerCrisprPart>(MemberList.None);
            CreateMap<Indexer.Data.CrisprPartData.DirectRepeatPart, DirectRepeatCrisprPart>(MemberList.None);
            CreateMap<Indexer.Data.CrisprPartData.InsertionSequencePart, InsertionSequenceCrisprPart>(MemberList.None);
            CreateMap<Indexer.Data.CrisprPartData.NamedSequencePart, NamedSequenceCrisprPart>(MemberList.None);
            CreateMap<Indexer.Data.CrisprPartData.SequenceRange, Range>(MemberList.None);
            CreateMap<Indexer.Data.CrisprPartData.GenePart, GeneCrisprPart>(MemberList.None);
            CreateMap<Indexer.Data.GeneData, Gene>(MemberList.None);
            CreateMap<DateTime, Timestamp>().ConvertUsing(x => x.ToUniversalTime().ToTimestamp());
            
            CreateMap<StrainCondition, Indexer.Search.Condition>(MemberList.None);
            CreateMap<BoolStrainCondition, Indexer.Search.BoolCondition>(MemberList.None);
            CreateMap<KeywordStrainCondition, Indexer.Search.KeywordCondition>(MemberList.None);

            ForAllPropertyMaps(
                map => map.DestinationType.IsGenericType &&
                       map.DestinationType.GetGenericTypeDefinition() == typeof(RepeatedField<>),
                (map, options) => options.UseDestinationValue());
        }
    }
}