

describe.skip("pi testing",()=>{
    it.skip("get call in cypress",()=>{
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body[0]).has.property("userId", 1);
        })
    })
    it.skip("post call in cypress",()=>{
        cy.request(
            {
                method: "POST",
                url: "https://jsonplaceholder.typicode.com/posts",
                body: {
                  "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
    }).then((response)=>{
        expect(response.status).to.eq(201);
        expect(response.body).has.property("id", 101);
        expect(response.body).has.property(title, "sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    })
})
it.skip('put call', () => {
 
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                'id': 1,
                'userId': 1,
                'title': 'i am going to upadate the post 1 data',
                'body': 'This is upadated post data'
            }
        })
            .then((resposnse) => {
                expect(resposnse.status).to.equal(200);
                expect(resposnse.body).to.have.property('id', 1);
                expect(resposnse.body).to.have.property('userId', 1);
                expect(resposnse.body).to.have.property('title', 'i am going to upadate the post 1 data');
                expect(resposnse.body).to.have.property('body', 'This is upadated post data');
 
            })
    })

it('should delete a post', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1'
    })
        .then((response) => {
            expect(response.status).to.equal(200);
        })  

})
})




describe.skip("get all products list",()=>{
    it("get",()=>{
        cy.request({
            method:"GET",
            url:"https://automationexercise.com/api/productsList"
    }).then((response)=>{
        expect(response.status).to.equal(200);
        //expect(response.body).to.have.property('products');
       
    })
    })
})

describe.only("API: Get all brands list", () => {

  it("should return all brands list successfully", () => {

    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/brandsList",
      headers: {
        accept: "application/json"
      }
    }).then((response) => {

      // ✅ Verify response code
      expect(response.status).to.equal(200)

      // ✅ Parse response body (string → JSON)
      const body = JSON.parse(response.body)

      // ✅ Verify brands list exists
      expect(body).to.have.property('brands')

      // ✅ Verify brands is an array
      expect(body.brands).to.be.an('array')
      expect(body.brands.length).to.be.greaterThan(0)

      // ✅ Verify brand object structure
      const brand = body.brands[0]
      expect(brand).to.have.property('id')
      expect(brand).to.have.property('brand')
    })
  })

})
