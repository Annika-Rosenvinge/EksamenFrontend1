import Header from "./Header";
import Footer from "./Footer";
import {allMatches} from "../Settings";
import {matches} from "@testing-library/jest-dom/dist/utils";

const Matches = () => {

    function getAllMatches(DOMElement){
        return fetch(allMatches).then(function (response){
            return response.json();
        })
        .then(function (data){
            const allData = data.all;
            const all = document.querySelector('#allMatches')
            for (let matches of allData){
                let tr = DOMElement.insertRow(0);
                let c0 = tr.insertCell(0).innerHTML=matches.id;
                let c1 = tr.insertCell(1).innerHTML=matches.judge;
                let c2 = tr.insertCell(2).innerHTML=matches.type;
                let c3 = tr.insertCell(3).innerHTML=matches.indoors_outdoors;
                let c4 = tr.insertCell(4).innerHTML=matches.teams;
                let c5 = tr.insertCell(5).innerHTML=matches.location;
            }
        })
    }

    function getAll(){
        return fetch(allMatches).then(function (response){
            return response.json();
        })
            .then(function (data){
                const allData = data.all;
                data.matches.map((matches, m) =>(
                    <table className="tableStyle">
                        <thead>
                            <tr>
                                <th className="tableoverskrift">Id</th>
                                <th className="tableoverskrift">Dommer</th>
                                <th className="tableoverskrift">Type</th>
                                <th className="tableoverskrift">Indendørs eller udendørs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={m}>
                                <td>{matches.id}</td>
                                <td>{matches.judge}</td>
                                <td>{matches.type}</td>
                                <td>{matches.indoors_outdoors}</td>
                            </tr>
                        </tbody>
                    </table>
                ))
            })
    }

    const c = document.getElementsByClassName("coll");
    let i;

    for (i = 0; i < c.length; i++) {
        c[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    return(
        <div className="divPadding">
            <Header/>
            <div className="divComp">
                <p className="headerText">See alle matches</p>
                    <table className="tableStyle">
                            <tr>
                                <th className="tableoverskrift">Id</th>
                                <th className="tableoverskrift">Dommer</th>
                                <th className="tableoverskrift">Type</th>
                                <th className="tableoverskrift">Indendørs eller udendørs</th>
                            </tr>
                        <tbody className="tabletext" id="allMatchesBody" >
                            <tr>
                                <td>1</td>
                                <td>Finn Andersen</td>
                                <td>Træningskamp</td>
                                <td>Udendørs</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mia Hansen</td>
                                <td>Venskabskamp</td>
                                <td>Udendørs</td>
                            </tr>
                        </tbody>
                    </table>
                <p className="headerText">Find match for Team</p>
            </div>
            <Footer/>
        </div>

    )
}

export default Matches;

/* sættes ind efter p tag
* <!--<button type="button" className="coll">Fold ud/ind</button>-->
  <!-- <div className="content">-->
  * efter table
* <!--</div>-->
* */