using prjViewSample.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjViewSample.Controllers
{
    public class Sample02Controller : Controller
    {
        // GET: Sample02
        public ActionResult Index(int n = 0) //取得URL所帶的QueryString中的n的值 => ?n=1
        {
            List<Movie> list = new List<Movie>();
            list.Add(new Movie() { Id = "GhwVSzJZoHk", Name = "ASP NET MVC待辦事項CRUD(一)" });
            list.Add(new Movie() { Id = "Q8zfvr9gxUs", Name = "ASP NET MVC待辦事項CRUD(二)" });
            list.Add(new Movie() { Id = "j5mlxarc5-g", Name = "ASP.NET MVC 控制器與動作方法" });
            list.Add(new Movie() { Id = "li9sMIdNEho", Name = "ASP.NET MVC-模型繫結" });
            ViewBag.MovieId = list[n].Id;
            return View(list);
        }
    }
}