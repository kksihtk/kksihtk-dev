function eventHandlerSelectChange(event) {
            let val = event.srcElement.value
            switch (val) {
                case "ENG":
                    alert("English");
                    break;
                case "RU":
                    alert("Russian");
                    break;
                case "KZ":
                    alert("Kazakh");
                    break;
            }
        }