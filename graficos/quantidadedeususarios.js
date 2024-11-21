import {getCSS, tickConfig} from "./common.js"
async function quantidadeUsuarios PorRede() {
    const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res= await fetch(url)
    const dados = await res.json()
    const nomeDasRedes= Object.keys(dados)
    const quantidadeDeUsuarios Object.values(dados)
    const data = {
        x: nomeDasRedes,
        y: quantidadeDeUsuarios,
        type: 'bar',
        marker: {
            color: getCSS('--cor-secundaria')
        }
    }
}
const laytout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS(--bg-color'),
        title: {
…            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('---cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--cor-principal')
                }
            }
        }
    
    const grafico document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico)
}
quantidadeUsuariosPorRede()
