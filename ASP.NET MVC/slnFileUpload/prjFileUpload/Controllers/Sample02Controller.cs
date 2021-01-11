using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.IO;

namespace prjFileUpload.Controllers
{
    public class Sample02Controller : Controller
    {
        // GET: Sample02
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(HttpPostedFileBase[] myfiles) // 允許一次上傳多的檔案，所以是陣列
        {
            string filename = "";
            for (int i = 0; i < myfiles.Length; i++)
            {
                HttpPostedFileBase myfile = (HttpPostedFileBase)myfiles[i];  //限制myfiles[i]型別為HttpPostedFileBase => 用法class)obj
                if (myfile != null)
                {
                    if (myfile.ContentLength > 0)
                    {
                        filename = Path.GetFileName(myfile.FileName);
                        string path = string.Format("{0}/{1}", Server.MapPath("~/images"), filename);
                        myfile.SaveAs(path);
                    }
                }
            }

            return RedirectToAction("ShowPhotos");
        }

        public string ShowPhotos()
        {
            string show = "";
            DirectoryInfo dir = new DirectoryInfo(Server.MapPath("~/images"));
            FileInfo[] fInfo = dir.GetFiles();

            foreach (FileInfo f in fInfo)
            {
                show += string.Format("<img src='../images/{0}' width='160' height='120'>", f.Name);
            }
            show += "<hr>";
            show += "<a href='Create'>返回</a>";
            return show;
        }
    }
}