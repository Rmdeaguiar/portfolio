import './styles.css';
import Css from '../../assets/css.svg'
import TypeScript from '../../assets/typescript.svg'
import ReactJs from '../../assets/reactjs.svg'
import NodeJs from '../../assets/node.svg'
import Git from '../../assets/git.svg'
import JavaScript from '../../assets/javascript.svg'
import Postgre from '../../assets/postgresql.svg'
import Link from '../../assets/link.svg'
import GitHub from '../../assets/github.svg'
import Styled from '../../assets/styledcomp.svg'
import Redux from '../../assets/redux.svg'

function Projects() {

  return (
    <div className="container-projects">
      <h1>Projetos</h1>
      <div className='projects'>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>Desafio MKS Sistemas</h2>
              <div className='description'>
                <p>Desafio para construção de um site para loja, onde é possível adicionar itens ao carrinho e gerenciar suas quantidades. Os produtos são obtidos através de uma api, e o design foi feito a partir de um figma já pronto.</p>
                <p>Foi solicitada a utilização do React com TypeScript, Styled-Components e Redux</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/mkt-desafio' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Código</a>
                <a href='https://mks-desafio.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />Link projeto</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={TypeScript} alt='typescript' />
                <img src={Styled} alt='styled-components' />
                <img src={Redux} alt='styled-components' />
                <img src={Git} alt='git' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>Timer</h2>
              <div className='description'>
                <p>Crônometro para marcar o tempo realizado com React Js e CSS.</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/timer' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Código</a>
                <a href='https://stopwatch-timer-60.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />Link projeto</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={Css} alt='css' />
                <img src={Git} alt='git' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>Vitor Silveira Adv.</h2>
              <div className='description'>
                <p>Site profissional realizado para o advogado Vitor Silveira.</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/vitorcsadv' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Código</a>
                <a href='https://www.vitorsilveiraadv.com.br/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />Link projeto</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={Css} alt='css' />
                <img src={Git} alt='git' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>Lista de Tarefas</h2>
              <div className='description'>
                <p>Uma aplicação para organização de tarefas, permitindo ao usuário se cadastrar, logar e começar a gerenciar suas tarefas à serem feitas.</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/front-todolist' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Front-End</a>
                <a href='https://github.com/Rmdeaguiar/back-todolist' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Back-End</a>
                <a href='https://sualistadetarefas.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />Link projeto</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={Css} alt='css' />
                <img src={JavaScript} alt='javascript' />
                <img src={NodeJs} alt='nodejs' />
                <img src={Postgre} alt='postgresql' />
                <img src={Git} alt='git' />
                <span>EXPRESS</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>Payment Management</h2>
              <div className='description'>
                <p>Projeto final de conclusão do curso de Desenvolvimento de Software da Cubos Academy.
                  Foi realizada uma aplicação onde usuários de uma organização poderiam cadastrar, editar ou remover clientes e suas respectivas cobranças.</p>
                  <p>
                  Além disso, algumas funcionalidades como resumo total de cobranças, pesquisa, ordenação e detalhamento de cada cliente/cobrança também estão disponíveis para os usuários da aplicação. O projeto foi realizado por uma equipe de 5 pessoas.</p>
                  
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/payment-management-front' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Front-End</a>
                <a href='https://github.com/Rmdeaguiar/payment-management-back' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Back-End</a>
                <a href='https://payment-management.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />Link projeto</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={Css} alt='css' />
                <img src={JavaScript} alt='javascript' />
                <img src={NodeJs} alt='nodejs' />
                <img src={Postgre} alt='postgresql' />
                <img src={Git} alt='git' />
                <span>EXPRESS</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>NG App</h2>
              <div className='description'>
                <p>Aplicação construída para o Desafio NG. Uma aplicação simulando um banco, onde o usuário pode se cadastrar, entrar e ter acesso a algumas funcionalidades, como visualização do seu balanço, de suas transferências, e também para realizar uma nova transação bancária.</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/front-desafiong' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Front-End</a>
                <a href='https://github.com/Rmdeaguiar/back-desafiong' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Back-End</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={Css} alt='css' />
                <img src={TypeScript} alt='typescript' />
                <img src={NodeJs} alt='nodejs' />
                <img src={Postgre} alt='postgresql' />
                <img src={Git} alt='git' />
                <span>EXPRESS</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>Atelier Denise Colaferro</h2>
              <div className='description'>
              <p>Aplicação construída para a artista Denise Colaferro. Um site onde clientes podem visualizar as peças disponíveis e entrar em contato diretamente pelo WhatsApp ou Instagram.</p>
            </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/atelierdenisecolaferro' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Código</a>
                <a href='https://atelierdenisecolaferro.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />Link projeto</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={Css} alt='css' />
                <img src={Git} alt='git' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
