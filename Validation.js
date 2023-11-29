/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function Validation(){
    let name = document.forms["contactform"]["name"].value;
            if (name === "")
            {
                alert("Name must be filled out");
                document.form["contactform"]["name"].select();
                document.form["contactform"]["name"].focus();
                return false;
            }
    let email = document.forms["contactform"]["email"].value;
            if (email === "")
            {
                alert("Email must be filled out");
                document.form["contactform"]["email"].select();
                document.form["contactform"]["email"].focus();
                return false;
            }
    let subject = document.forms["contactform"]["subject"].value;
            if (subject === "")
            {
                alert("Subject must be filled out");
                document.form["contactform"]["subject"].select();
                document.form["contactform"]["subject"].focus();
                return false;
            }
    let text = document.forms["contactform"]["text"].value;
            if (text === "")
            {
                alert("Text must be filled out");
                document.form["contactform"]["text"].select();
                document.form["contactform"]["text"].focus();
                return false;
            }        
        }