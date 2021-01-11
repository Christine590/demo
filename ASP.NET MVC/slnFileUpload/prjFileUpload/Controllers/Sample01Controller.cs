using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO; // 欲上傳檔案需引用此命名空間

namespace prjFileUpload.Controllers
{
    public class Sample01Controller : Controller
    {
        // GET: Sample01
        public ActionResult Create()
        {
            return View();
        }

        // 若沒有加HttpPost，表單在送的時候，兩個完全同名的Create()會不知道要調用哪個
        [HttpPost]
        public ActionResult Create(HttpPostedFileBase myfile)
        {
            string filename = "";
            if (myfile != null) //確認檔案不為空物件
            {
                if (myfile.ContentLength > 0) //檔案長度是myfile.ContentLength；檔案數量是myfile.Length
                {
                    filename = Path.GetFileName(myfile.FileName); //取得上傳路徑中的檔名
                    // 為何不直接寫 = myfile.FileName???

                    string path = string.Format("{0}/{1}", Server.MapPath("~/images"), filename); // 指定server路徑(包含檔名!!)
                    // 每次都是用檔案名稱所以同檔名只會存一張在server(覆蓋)，無法重複上傳 => 可優化調整
                    myfile.SaveAs(path); // 將檔案存到該路徑
                }
            }
            return RedirectToAction("ShowPhotos");
        }

        public string ShowPhotos()
        {
            string show = "";
            DirectoryInfo dir = new DirectoryInfo(Server.MapPath("~/images")); // 設定server上的指定目錄
            FileInfo[] fInfo = dir.GetFiles(); // 取得指定目錄下的所有檔案，並將多個檔案存入陣列
            foreach (FileInfo f in fInfo)
            {
                // 自己組出欲顯示於畫面的html
                show += string.Format("<img src='../images/{0}' width='160' height='120'>" , f.Name);
            }
            show += "<hr>";
            show += "<a href='Create'>返回</a>";
            return show; // 傳回html字串
        }

    }
}