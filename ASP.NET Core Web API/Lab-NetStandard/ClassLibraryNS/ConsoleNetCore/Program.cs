using System;

namespace ConsoleNetCore
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            var ns = new ClassLibraryNS.Class1();
            Console.WriteLine(ns.GetString());
            Console.Read();
        }
    }
}
