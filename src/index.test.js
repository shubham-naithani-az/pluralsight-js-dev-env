import {expect} from "chai";
import fs from "fs";
import jsdom from "jsdom";

describe('Our first test',()=> {
    it('it should pass',()=>{
            expect(true).to.equal(true);
    })
});

describe('index.js',()=>{
    it('should say h1 that says Users',(done)=>{
        const index= fs.readFileSync('./src/index.html','UTF-8');
        jsdom.env(index,function(err, window){
            const h1=window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
        })
    })
})

