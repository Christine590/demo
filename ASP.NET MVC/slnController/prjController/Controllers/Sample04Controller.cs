using prjController.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjController.Controllers
{
    public class Sample04Controller : Controller
    {
        // GET: Sample04
        public ActionResult ShowProduct()
        {
            List<Product> list = new List<Product>();
            list.Add(new Product() { PId = "A01", PName = "XBox One", Price = 12800 });
            list.Add(new Product() { PId = "A02", PName = "PS 4", Price = 9500 });
            list.Add(new Product() { PId = "A03", PName = "Switch", Price = 14500 });
            return View(list);
        }

        public ActionResult ShowProductForViewBag()
        {
            List<Product> list = new List<Product>();
            list.Add(new Product() { PId = "A01", PName = "XBox One", Price = 12800 });
            list.Add(new Product() { PId = "A02", PName = "PS 4", Price = 9500 });
            list.Add(new Product() { PId = "A03", PName = "Switch", Price = 14500 });
            ViewBag.Product = list; // ViewBag可放string、int或object等
            return View();
        }
    }
}