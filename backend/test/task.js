let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');




chai.should();


chai.use(chaiHttp);

describe('Tasks API', () => {

    describe("GET /api/v1/users/fetchapplications" , () => {

        it("IT SHOULD RETURN ALL THE APPLICATIONS" , (done) => {
            // const task = {
            //     email:'shaangzb@gmail.com',
            //     password:'123',
                
            // };

            chai.request('http://localhost:8000')
                .get("/api/v1/users/fetchapplications")
                
                .end((err,response) => {
                    
                    response.body.should.be.a('object');
    
                    console.log('*********',response.body)
                  

                done();

                });
        })

    })

    describe("GET /api/v1/users/" , () => {

        it("IT SHOULD RETURN ALL THE JOBS" , (done) => {
            // const task = {
            //     email:'shaangzb@gmail.com',
            //     password:'123',
                
            // };

            chai.request('http://localhost:8000')
                .get("/api/v1/users/")
                
                .end((err,response) => {
                    
                    response.body.should.be.a('object');
    
                    console.log('*********',response.body)
                  

                done();

                });
        })

    })

    describe("GET /api/v1/users/" , () => {

        it("IT SHOULD RETURN ALL THE JOBS" , (done) => {
            // const task = {
            //     email:'shaangzb@gmail.com',
            //     password:'123',
                
            // };

            chai.request('http://localhost:8000')
                .get("/api/v1/users/")
                
                .end((err,response) => {
                    
                    response.body.should.be.a('object');
    
                    console.log('*********',response.body)
                  

                done();

                });
        })

    })

    describe("POST /api/v1/users/createjob" , () => {

        it("IT SHOULD RETURN THE JOB" , (done) => {
            const body = {
                
                name: 'Shaan',
                managerid: '1234556',
                skills: 'C,java',
                location: 'Noida',
                description: 'xyz',
                pay: '10',
                schedule: '10/10/10',
                
            };

            chai.request('http://localhost:8000')
                .post("/api/v1/users/createjob")
                .send({name: 'Shaan',
                managerid: '1234556',
                skills: 'C,java',
                location: 'Noida',
                description: 'xyz',
                pay: '10',
                schedule: '10/10/10'})
                .end((err,response) => {
                    
                    response.body.should.be.a('object');
    
                    console.log('*********',response.body)
                  

                done();

                });
        })

    })


    describe("GET /api/v1/users/search" , () => {

        it("IT SHOULD RETURN THE SEARCHED JOB" , (done) => {
            const body = {
                
                name: 'Shaan',
                managerid: '1234556',
                skills: 'C,java',
                location: 'Noida',
                description: 'xyz',
                pay: '10',
                schedule: '10/10/10',
                
            };

            chai.request('http://localhost:8000')
                .get("/api/v1/users/search/TA")
                // .send(body)
                .end((err,response) => {
                    
                    response.body.should.be.a('object');
    
                    console.log('*********',response.body.users)
                  

                done();

                });
        })

    })

    describe("POST /api/v1/users/create-session" , () => {

        it("IT SHOULD RETURN THE USER" , (done) => {
            const body = 
                {email:'boss@gmail.com',
                password:'123',
                
        };
            chai.request('http://localhost:8000')
                .post("/api/v1/users/create-session")
                .send(body)
               
                .end((err,response) => {
                    
                    response.body.should.be.a('object');
    
                    console.log('*********',response.body)
                  

                done();

                });
        })

    })


    

})