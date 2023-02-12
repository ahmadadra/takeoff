import { Component, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sections: any = [];
  localizations: any = [];
  lan: string = "En";

  ngOnInit(): void {
    // params: Object = { // get
    // fields: "Title,Section,Text,specs",
    // limit: -1,
    // locale: "En,Ar",
    // media: "images"
    //   // where: {
    //   //   Title: "hello"
    //   // }
    // };

    // Put or Post
    // params = { 
    //   Title: "gjdos",
    //   Text: "fdsjhfdskj",
    // }

    // Put and delete -> path = /table/objectId



    this.api('/Sections/', 'get', {
      fields: "Title,Section,Text,specs",
      limit: -1,
      locale: "En,Ar",
      media: "images"
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.sections = data.results;

        // only in sections (array to object + localstorage)
        let obj = Object.assign(
          {},
          ...this.sections.map((x: any) => ({ [x.Section]: x }))
        );
        this.sections = obj;
        console.log(this.sections);
        localStorage.setItem("sections", JSON.stringify(obj));
        // End
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    this.api('/_Locale/', 'get', {
      fields: "Key,En,Ar",
      limit: -1,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.localizations = data.results;

        // only in localizations (array to object + localstorage)
        let obj = Object.assign(
          {},
          ...this.localizations.map((x: any) => ({ [x.Key]: x }))
        );
        this.localizations = obj;
        console.log(this.localizations);
        localStorage.setItem("localizations", JSON.stringify(obj));
        // End
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }


  api(path: String, method: String, obj: any): Promise<Response> {
    let p = 'https://beaapis.com/1' + path;
    method = method.toUpperCase();
    if (method == 'GET') p += ('?' + new URLSearchParams(obj));
    let o: any = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        "X-BEA-Application-ID": "fmvXhJD8y762E1qDkxcXWQJWcMaa3ds67i7WEA0wBkk",
        "X-BEA-Authorization": "lnsONvkZXx4orqYMmEYDgTfdv2VbXvRCJBRThdKAkoQ",
      }
    };
    if (method != 'GET') o['body'] = JSON.stringify(obj);
    return fetch(p, o);
  }

  changeLanguage() {
    if (this.lan == 'En') this.lan = 'Ar';
    else this.lan = 'En';

    console.log(this.lan)
  }
}



