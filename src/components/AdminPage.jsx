import Header from "./Header";
import Footer from "./Footer";
import {allMatches} from "../Settings";
import {matches} from "@testing-library/jest-dom/dist/utils";

const AdminPage = () => {

    return(
        <div className="divPadding">
            <Header/>
            <div className="divComp">
                <p className="headerText">See alle spillere</p>
                <table className="tableStyle">
                    <tr>
                        <th className="tableoverskrift">Id</th>
                        <th className="tableoverskrift">Navn</th>
                        <th className="tableoverskrift">Telefon</th>
                        <th className="tableoverskrift">email</th>
                        <th className="tableoverskrift">status</th>
                    </tr>
                    <tbody className="tabletext" id="allMatchesBody" >
                    <tr>
                        <td>1</td>
                        <td>Sofia Pedersen</td>
                        <td>89768909</td>
                        <td>email@email.dk</td>
                        <td>inaktiv</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Karsten Holt</td>
                        <td>98762342</td>
                        <td>kent@email.dk</td>
                        <td>aktiv</td>
                    </tr>
                    </tbody>
                </table>
                <p className="headerText">Slet player</p>
                <p className="tabletext">Indtast id'et på den player der skal fjernes fra systemet</p>
                <input type="text"/>
                <input type="button" className="btn" value="delete"/>
                <p className="headerText">Tilføj en player til systemet</p>
            </div>
            <Footer/>
        </div>

    )
}

export default AdminPage;
