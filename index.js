//on HTML content loaded
window.addEventListener('DOMContentLoaded', (e) =>{
    //console.log("Document fully loaded");
    let index_btns = document.querySelector(".index_buttons");
    let main_index = document.querySelector(".index_main");
    let btns = index_btns.querySelectorAll("button");
    let sign_up = btns[0];
    let login = btns[1];
    sign_up.addEventListener('click', (e) =>{
        e.preventDefault();
        reset_page();
        let message_text = document.createElement("h3");
        message_text.innerText = "Sign up today and start writing your dreams"
        main_index.appendChild(message_text);
        let form_holder = document.createElement("div");
        let sign_up_form = document.createElement("form");
        sign_up_form.classList.add("form_margin");
        form_holder.appendChild(sign_up_form);
        main_index.appendChild(form_holder);
       
        //first name
        let firstname_label = document.createElement("label");
        firstname_label.innerText = "First Name";
        firstname_label.setAttribute("for","firstname");
        sign_up_form.appendChild(firstname_label);
        let firstname_input = document.createElement("input");
        firstname_input.setAttribute("type","text");
        firstname_input.setAttribute("maxLength","26");
        firstname_input.setAttribute("id","firstname");
        sign_up_form.appendChild(firstname_input);
        firstname_label.classList.add("label");
        firstname_input.classList.add("input");
        //last name
        let lastname_label = document.createElement("label");
        lastname_label.innerText = "Last Name";
        lastname_label.setAttribute("for","lastname");
        sign_up_form.appendChild(lastname_label);
        let lastname_input = document.createElement("input");
        lastname_input.setAttribute("type","text");
        lastname_input.setAttribute("maxLength","26");
        lastname_input.setAttribute("id","lastname");
        sign_up_form.appendChild(lastname_input);
        lastname_label.classList.add("label");
        lastname_input.classList.add("input");
        //email
        let email_label = document.createElement("label");
        email_label.innerText = "Email";
        email_label.setAttribute("for","email");
        sign_up_form.appendChild(email_label);
        let email_input = document.createElement("input");
        email_input.setAttribute("type","email");
        email_input.setAttribute("maxLength","70");
        email_input.setAttribute("id","email");
        sign_up_form.appendChild(email_input);
        email_label.classList.add("label");
        email_input.classList.add("input");
        //password
        let pswrd_label = document.createElement("label");
        pswrd_label.innerText = "Password";
        pswrd_label.setAttribute("for","pswrd");
        sign_up_form.appendChild(pswrd_label);
        let pswrd_input = document.createElement("input");
        pswrd_input.setAttribute("type","password");
        pswrd_input.setAttribute("maxLength","70");
        pswrd_input.setAttribute("id","pswrd");
        sign_up_form.appendChild(pswrd_input);
        pswrd_label.classList.add("label");
        pswrd_input.classList.add("input");
        //checkbox
        let terms_chkbx = document.createElement("input");
        terms_chkbx.setAttribute("type","checkbox");
        terms_chkbx.setAttribute("id","chkbx");
        let terms_label = document.createElement("label");
        terms_label.setAttribute("for","chkbx");
        terms_label.innerText = "I agree to the Terms of Use";
        terms_chkbx.classList.add("chkbx");
        terms_label.classList.add("chkbx_label");
        sign_up_form.appendChild(terms_chkbx);
        sign_up_form.appendChild(terms_label);
        //button
        let signup_btn = document.createElement("button");
        signup_btn.setAttribute("type","submit");
        signup_btn.innerText = "create account";
        sign_up_form.appendChild(signup_btn);
        signup_btn.classList.add("fly_btn");
        let err_para = document.createElement("p");
        err_para.classList.add("err_label");
        main_index.appendChild(err_para);
        sign_up_form.addEventListener('submit',(e) =>{
            e.preventDefault()
            let formInput =sign_up_form.querySelectorAll("input");
            if((formInput[0].value !=="") && (formInput[1].value !=="") && (formInput[2].value !=="")  && (formInput[3].value !=="")){
                if( formInput[4].checked !== true){
                    err_para.innerText = "Please accept our term of use to continue!";
                    return;
                }else{
                    err_para.innerText ="";
                    let account = [];
                    account.push(JSON.parse(localStorage.getItem("UserDetails")));
                    account.push(formInput[0].value, formInput[1].value, formInput[2].value, formInput[3].value);
                    window.localStorage.setItem("UserDetails",JSON.stringify(account))
                }
            }else{
                err_para.innerText = "All the fields are required!";
                return;
            }
        });
         
    });
    login.addEventListener("click", (e) =>{
        e.preventDefault();
        reset_page();
        //creating login form
        let message_text = document.createElement("h3");
        message_text.innerText = "Login and continue writing your dreams!"
        main_index.appendChild(message_text);
        let form_holder = document.createElement("div");
        let login_form = document.createElement("form");
        login_form.classList.add("form_margin");
        form_holder.appendChild(login_form);
        main_index.appendChild(form_holder);
        //email
        let email_label = document.createElement("label");
        email_label.innerText = "Email";
        email_label.setAttribute("for","email");
        login_form.appendChild(email_label);
        let email_input = document.createElement("input");
        email_input.setAttribute("type","email");
        email_input.setAttribute("maxLength","70");
        email_input.setAttribute("id","email");
        login_form.appendChild(email_input);
        email_label.classList.add("label")
        email_input.classList.add("input")
        //password
        let pswrd_label = document.createElement("label");
        pswrd_label.innerText = "Password";
        pswrd_label.setAttribute("for","pswrd");
        login_form.appendChild(pswrd_label);
        let pswrd_input = document.createElement("input");
        pswrd_input.setAttribute("type","password");
        pswrd_input.setAttribute("maxLength","70");
        pswrd_input.setAttribute("id","pswrd");
        login_form.appendChild(pswrd_input);
        pswrd_label.classList.add("label");
        pswrd_input.classList.add("input");
        //button
        let login_btn = document.createElement("button");
        login_btn.setAttribute("type","submit");
        login_btn.innerText = "Login";
        login_form.appendChild(login_btn);
        login_btn.classList.add("fly_btn");
        let err_para = document.createElement("p");
        err_para.classList.add("err_label");
        main_index.appendChild(err_para);
        login_form.addEventListener('submit',(e) =>{
            e.preventDefault()
            let formInput =login_form.querySelectorAll("input");
            if((formInput[0].value !=="") && (formInput[1].value !=="")){
                err_para.innerText = "";
                return;
            }else{
                err_para.innerText = "All the fields are required!";
                return;
            }
        });    
    });
    let reset_page = function(){
        main_index.innerHTML = " "
    }

    
});