using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.IO;

namespace onlylea.vip.Pages;

public class IndexModel : PageModel {
    private readonly ILogger<IndexModel> _logger;

    public IndexModel(ILogger<IndexModel> logger){
        _logger = logger;
    }

    public List<string> Sections { get; private set; } = new();


    public void OnGet(){

        string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/");

        if (Directory.Exists(folderPath)){
            Sections = new List<string>(Directory.GetDirectories(folderPath).Select(file => Path.Combine(folderPath, Path.GetFileName(file))));
        }

        public string[][] ImageFiles { get; set; } = new string[5][];

        //for (int i=0; i<Sections.Length; i++){
        //    ImageFiles[i] = new List<string>(Directory.GetFiles(Sections[i]).Select(file => Path.Combine(folderPath, Path.GetFileName(file))));
        //    // Console.WriteLine($"{ImageFiles[i]}");
        //}
    }
}
