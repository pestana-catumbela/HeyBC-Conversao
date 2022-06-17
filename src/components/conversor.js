import React, {Component} from 'react';
import './conversor.css';

class Conv extends Component{
    constructor(props){
        super(props);

        this.state = {
            moeda1Valor: "",
            moeda2Valor: 0
        }

        this.convert = this.convert.bind(this);
    }

    convert(e){
        e.preventDefault()
        let de_para = `${this.props.moeda1}_${this.props.moeda2}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=ee2fda63cd1f013a8dcb`;
        fetch(url).then(res => {
            return res.json()
        }).then(json => {
            let cotacao = json[de_para];
            let moeda2Valor = (parseFloat(this.state.moeda1Valor) * cotacao).toFixed(2)
            this.setState({moeda2Valor})
        })
    }

    render(){
        return(
            <>
                <section>
                    <form className="formConversao" onSubmit={this.convert}>
                        <div>
                            <h2>
                                de <span>{this.props.moeda1}</span> para <span>{this.props.moeda2}</span>
                            </h2>
                        </div>

                        <div className="submit">
                            <input type="text" placeholder="Digite um valor" onChange={(e) => {this.setState({moeda1Valor: e.target.value})}} required/>
                            <button type="submit">Converter</button>
                        </div>
                    </form>
                </section>

                <section className="result">
                    <h2>{this.state.moeda2Valor}</h2>
                </section>
            </>
        );
    }
}

export default Conv;

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=ee2fda63cd1f013a8dcb