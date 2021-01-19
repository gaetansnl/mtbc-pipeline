using System;
using System.IO;

namespace MTBC
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location));

        }
    }
}