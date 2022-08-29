        let products= {
            data: [
                {
                id:01,
                productName:"Logitech_G304 Wireless Gaming Mouse",
                price:"1,190฿",
                category:"mouse",
                image: "pic/01_Logitech-G304-Wireless-Gaming-Mouse.jpg"  
                },
                {
                id:02,
                productName:"Logitech_G502 Hero RGB Mouse",
                price:"1,590฿",
                category:"mouse",
                image:  "pic/02_Logitech-G502-Hero-RGB.jpg"
            },
            {
                id:03,
                productName:"Logitech_G-Pro-X Superlight Wireless Gaming Mouse",
                price:"4,190฿",
                category:"mouse",
                image: "pic/03_Logitech-G-Pro-X-Superlight-Wireless-Gaming-Mouse.jpg"
            },
            {
                id:04,
                productName:"Logitech_G213 Prodigy Gaming Keyboard-TH",
                price:"1,390฿",
                category:"keyboard",
                image: "pic/04_Logitech-G213-Prodigy-Gaming-Keyboard-TH.jpg"
            },
            {
                id:05,
                productName:"Logitech_G512 RGB Mechanical Keyboard-TH GX-Blue",
                price:"2,790฿",
                category:"keyboard",
                image: "pic/05_Logitech-G512-RGB-Mechanical-Keyboard-TH-GX-Blue.jpg"
            },
            {
                id:06,
                productName:"Logitech_G-PRO Mechanical Gaming Keyboard",
                price:"3,790฿",
                category:"keyboard",
                image: "pic/06_Logitech-G-PRO-Mechanical-Gaming-Keyboard.jpg"
            },
            {
                id:07,
                productName:"Logitech_G913-TKL LIGHTSPEED Wireless Keyboard",
                price:"6,590฿",
                category:"keyboard",
                image: "pic/07_Logitech-G913-TKL-LIGHTSPEED-Wireless-Keyboard.jpg"
            },
            {
                id:08,
                productName:"Logitech_G333 In-Ear",
                price:"1,349฿",
                category:"earphones",
                image: "pic/08_Logitech-G333-In-Ear.jpg"
            },
            {
                id:09,
                productName:"Logitech_G733 Lightspeed Gaming Headphone",
                price:"4,390฿",
                category:"earphones",
                image: "pic/09_Logitech-G733-Lightspeed-Gaming-Headphone.jpg"
            },
            {
                id:10,
                productName:"Logitech_G-Pro-X Gaming Headphone",
                price:"4,190฿",
                category:"earphones",
                image: "pic/10_Logitech-G-Pro-X-Gaming-Headphone.jpg"
            },

            ],
        };

        for (let i of products.data) {
            //Create Card
            let card = document.createElement("div");
            //ซ่อนการจัดหมวดหมู่
            card.classList.add("card", i.category, "hide");
            //image div
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("image-container");
            //img tag
            let image = document.createElement("img");
            image.setAttribute("src", i.image);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);
            //container
            let container = document.createElement("div");
            container.classList.add("container");
            //id
            let id = document.createElement("h6"); 
            id.innerText = "รหัสสินค้า ID: " + i.id;
            container.appendChild(id);
            //product name
            let name = document.createElement("h5");
            name.classList.add("product-name");
            name.innerText = i.productName.toUpperCase();
            container.appendChild(name);
            //price
            let price = document.createElement("h6");
            price.innerText = "$" + i.price;
            container.appendChild(price);
          
            card.appendChild(container);
            document.getElementById("products").appendChild(card);
          }

           //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
        // [
        //     {
        //         id:01,
        //         name:"Logitech_G304 Wireless Gaming Mouse",
        //         price:"1,190฿",
        //         img: "pic/01_Logitech-G304-Wireless-Gaming-Mouse.jpg"
        //     }
            // {
            //     id:02,
            //     name:"Logitech_G502 Hero RGB Mouse",
            //     price:"1,590฿",
            //     img:  "pic/02_Logitech-G502-Hero-RGB.jpg"
            // },
            // {
            //     id:03,
            //     name:"Logitech_G-Pro-X Superlight Wireless Gaming Mouse",
            //     price:"4,190฿",
            //     img: "pic/03_Logitech-G-Pro-X-Superlight-Wireless-Gaming-Mouse.jpg"
            // },
            // {
            //     id:04,
            //     name:"Logitech_G213 Prodigy Gaming Keyboard-TH",
            //     price:"1,390฿",
            //     img: "pic/04_Logitech-G213-Prodigy-Gaming-Keyboard-TH.jpg"
            // },
            // {
            //     id:05,
            //     name:"Logitech_G512 RGB Mechanical Keyboard-TH GX-Blue",
            //     price:"2,790฿",
            //     img: "pic/05_Logitech-G512-RGB-Mechanical-Keyboard-TH-GX-Blue.jpg"
            // },
            // {
            //     id:06,
            //     name:"Logitech_G-PRO Mechanical Gaming Keyboard",
            //     price:"3,790฿",
            //     img: "pic/06_Logitech-G-PRO-Mechanical-Gaming-Keyboard.jpg"
            // },
            // {
            //     id:07,
            //     name:"Logitech_G913-TKL LIGHTSPEED Wireless Keyboard",
            //     price:"6,590฿",
            //     img: "pic/07_Logitech-G913-TKL-LIGHTSPEED-Wireless-Keyboard.jpg"
            // },
            // {
            //     id:08,
            //     name:"Logitech_G333 In-Ear",
            //     price:"1,349฿",
            //     img: "pic/08_Logitech-G333-In-Ear.jpg"
            // },
            // {
            //     id:09,
            //     name:"Logitech_G733 Lightspeed Gaming Headphone",
            //     price:"4,390฿",
            //     img: "pic/09_Logitech-G733-Lightspeed-Gaming-Headphone.jpg"
            // },
            // {
            //     id:10,
            //     name:"Logitech_G-Pro-X Gaming Headphone",
            //     price:"4,190฿",
            //     img: "pic/10_Logitech-G-Pro-X-Gaming-Headphone.jpg"
            // }
            
        // ];
        
                    // "Logitech_G304 Wireless Gaming Mouse",
            // "Logitech_G502 Hero RGB Mouse",
            // "Logitech_G-Pro-X Superlight Wireless Gaming Mouse",
            // "Logitech_G213 Prodigy Gaming Keyboard-TH",
            // "Logitech_G512 RGB Mechanical Keyboard-TH GX-Blue",
            // "Logitech_G-PRO Mechanical Gaming Keyboard",
            // "Logitech_G913-TKL LIGHTSPEED Wireless Keyboard",
            // "Logitech_G333 In-Ear",
            // "Logitech_G733 Lightspeed Gaming Headphone",
            // "Logitech_G-Pro-X Gaming Headphone"
        // document.getElementById("demo").innerHTML = product;