import rediff_forget_password from "../Pages/RegisterPage";
describe('Rediff new id',()=>{
  it('new rediff id',()=>{
    const rediffs=new rediff_forget_password();
    rediffs.visitwebsite();
    rediffs.click_on_new_rediff_id();
    cy.origin("https://register.rediff.com",()=>{
        Cypress.on("uncaught:exception",()=>false);
        cy.get("input[placeholder='Enter your full name']").type("revanth");    
          cy.get('input[placeholder="Enter Rediffmail ID"]').type("revanth1234");
           cy.get("input[value='Check availability']").click();
           cy.get("#check_availability span").then(($msg)=>{
            const message=$msg.text().trim();
            if(message.includes("Yippie! The ID you've chosen is available.")){
                cy.log("mail id is available");

            }else{
                    
                cy.get("div#recommend_text table td.f14").first().then(($msg)=>{
                const msgs=$msg.text().trim();
                cy.log(msgs);
                cy.get('input[placeholder="Enter Rediffmail ID"]').clear({ force: true }).type(msgs);
                cy.get("input[value='Check availability']").click();})


            }
    
           });

                cy.get("#newpasswd").type("Kamal@1234");
                cy.get("#newpasswd1").type("Kamal@1234");
                cy.get(".nomargin").check().should("be.checked");
                cy.get(".day").select("20");
                cy.get(".month").select("JUN");
                cy.get(".year").select("2000");
                let count=0;
                const c_a=[];
                cy.get("#country").then(($element)=>{
                    $element.text().trim().split("\n").forEach((country)=>{
                        c_a.push(country);
                        count++;    
                        cy.log(country);
                        
                    })
                    cy.log(c_a.length);
                    cy.get("#country").select("India")
                    cy.get("select.full-width option[value='99']").should("have.text","India");
                    
                    
                })

            

    });
   

  })



});































   //     const rediff=new rediff_new_user();
        //  rediff.enter_username("sneha");
        //  rediff.enter_rediff_id("sneha123");
        //  rediff.check_mail_avalibility_message().then(($msg)=>{
        //   const message=$msg.text().trim();
        //   if(message.includes("Yippie! The ID you've chosen is available.")){ 
        //      cy.log("mail id is available");
        //   }else{
        //     rediff.suggested_mail_id().first().then(($suggested_id)=>{
        //         const suggestedId=$suggested_id.text().trim();
        //         cy.log(suggestedId);
        //         cy.get(rediff.selectors.choose_reddiff_id).clear({force:true}).type(suggestedId);
        //         cy.get(rediff.selectors.check_availability).click();

        //     })
        //   } 
        //  });
        //          cy.get(rediff.selectors.new_password_input).type("Kamal@1234");
        //         cy.get(rediff.selectors.confirm_password_input).type("Kamal@1234");
        //         cy.get(rediff.selectors.alternative_id).check().should("be.checked");
        //         cy.get(rediff.selectors.day_class).select("20");
        //         cy.get(rediff.selectors.month_class).select("JUN");
        //         cy.get(rediff.selectors.year_class).select("2000");
        //         let count=0;
        //         const c_a=[];
        //         cy.get(rediff.selectors.country_id).then(($element)=>{
        //             $element.text().trim().split("\n").forEach((country)=>{
        //                 c_a.push(country);
        //                 count++;    
        //                 cy.log(country);
                        
        //             })
        //             cy.log(c_a.length);
        //             cy.get(rediff.selectors.country_id).select("India")
        //             cy.get(rediff.selectors.india_dropdown).should("have.text","India");
                    
                    
        //         })