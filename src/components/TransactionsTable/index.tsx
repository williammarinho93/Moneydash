import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$120</td>
                        <td>Desenvolvimento</td>
                        <td>19/08/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$120</td>
                        <td>Casa</td>
                        <td>19/08/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$120</td>
                        <td>Desenvolvimento</td>
                        <td>19/08/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}