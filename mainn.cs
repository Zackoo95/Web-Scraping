using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace ConsoleApp1
{
    class Program
    {
        IWebDriver driver = new ChromeDriver();

        //replace with the page you want to navigate to
        string your_page = "https://www.google.com";
        driver.Navigate().GoToUrl(your_page);

        ITakesScreenshot ssdriver = driver as ITakesScreenshot;
        Screenshot screenshot = ssdriver.GetScreenshot();

        Screenshot tempImage = screenshot;

        tempImage.SaveAsFile(@"C:\full.png", ImageFormat.Png);

        //replace with the XPath of the image element
        IWebElement my_image = driver.FindElement(By.XPath("//*[@id=\"hplogo\"]/canvas[1]"));

        Point point = my_image.Location;
        int width = my_image.Size.Width;
        int height = my_image.Size.Height;

        Rectangle section = new Rectangle(point, new Size(width, height));
        Bitmap source = new Bitmap(@"C:\full.png");
        Bitmap final_image = CropImage(source, section);

        final_image.Save(@"C:\image.jpg");
    }
}
