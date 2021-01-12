using prjViewSample.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjViewSample.Controllers
{
    public class Sample01Controller : Controller
    {
        // GET: Sample01
        public ActionResult Index()
        {
            List<Book> list = new List<Book>();
            list.Add(new Book() { Id = "AEL020600", Name = "C & C++程式設計經典-第四版", Price = 600 });
            list.Add(new Book() { Id = "AEL019800", Name = "跟著實務學習ASP.NET MVC-第一次寫MVC就上手", Price = 520 });
            list.Add(new Book() { Id = "AEL019300", Name = "Visual C# 2017程式設計經典", Price = 650 });
            list.Add(new Book() { Id = "AEL019500", Name = "Visual Basic 2017基礎必修課", Price = 530 });
            return View(list);
        }
    }
}