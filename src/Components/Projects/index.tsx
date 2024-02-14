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
import { Props } from '../../types/props';

function Projects({ english }: Props) {

  return (
    <div className="container-projects">
      <h1>{english ? 'Projects' : 'Projetos'}</h1>
      <div className='projects'>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>{english ? 'Activity Money' : 'App para controle monetário'}</h2>
              <div className='description'>
                <p>{english ? 'Application for recording income and bank debts, with additional features such as filter by type and summary of operations.' : 'Aplicação para registro de receitas e débitos bancários, com funcionalidades adicionais como filtro por tipo e resumo de operações.'}</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/activity_money' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Front-End</a>
                <a href='https://github.com/Rmdeaguiar/activity_money_api' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Back-End</a>
              </div>
              <div className='languages-project'>
                <img src={ReactJs} alt='reactjs' />
                <img src={TypeScript} alt='typescript' />
                <img src={Git} alt='git' />
                <img src={NodeJs} alt='nodejs' />
                <img src={Postgre} alt='postgresql' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='project'>
            <div className='content-project'>
              <h2>{english ? 'Challenge from MK Sistemas' : 'Desafio MKS Sistemas'}</h2>
              <div className='description'>
                <p>{english ? 'Challenge to build a website for a store, where you can add items to your cart and manage your requirements. The products are obtained through an API, and the design was made from a ready-made figure.' : 'Desafio para construção de um site para loja, onde é possível adicionar itens ao carrinho e gerenciar suas quantidades. Os produtos são obtidos através de uma api, e o design foi feito a partir de um figma já pronto.'}</p>
                <p>{english ? 'Requested to use React with TypeScript, Styled-Components and Redux' : 'Foi solicitada a utilização do React com TypeScript, Styled-Components e Redux'}</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/mkt-desafio' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />{english ? 'Code' : 'Código'}</a>
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
                <p>{english ? 'Stopwatch to mark the time made with React Js and CSS.' : 'Crônometro para marcar o tempo realizado com React Js e CSS.'}</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/timer' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />{english ? 'Code' : 'Código'}</a>
                <a href='https://stopwatch-timer-60.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />{english ? 'Project' : 'Projeto'}</a>
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
                <p>{english ? 'Professional website created for the lawyer Vitor Silveira.' : 'Site profissional realizado para o advogado Vitor Silveira.'}</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/vitorcsadv' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />{english ? 'Code' : 'Código'}</a>
                <a href='https://www.vitorsilveiraadv.com.br/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />{english ? 'Project' : 'Projeto'}</a>
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
              <h2>{english ? 'To Do List' : 'Lista de Tarefas'}</h2>
              <div className='description'>
                <p>{english ? 'An application for organizing tasks, allowing the user to register, log in and start managing their tasks to be done.' : 'Uma aplicação para organização de tarefas, permitindo ao usuário se cadastrar, logar e começar a gerenciar suas tarefas à serem feitas.'}</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/front-todolist' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Front-End</a>
                <a href='https://github.com/Rmdeaguiar/back-todolist' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Back-End</a>
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
                <p>{english ? `An application was created where users of an organization could register, edit or remove customers and their respective charges. In 
addition, some functionalities such as a summary of total charges, searching, sorting and detailing of each customer/charge are also 
available to the application's users. This project was made by a team of five people, and were used the following technologies: 
JavaScript, PostgreSQL, Node Js (Back-End) and React Js, CSS (Front-End). The Scrum Methodology for organizing and Git code 
versioning control were also used. ` : 'Projeto final de conclusão do curso de Desenvolvimento de Software da Cubos Academy. Foi realizada uma aplicação onde usuários de uma organização poderiam cadastrar, editar ou remover clientes e suas respectivas cobranças.'}</p>
                <p>{english ? `In addition, some functionalities such as a summary of total charges, search, sorting and detailing of each customer/charge are also available to the application's users. The project was carried out by a team of 5 people.` :
                  'Além disso, algumas funcionalidades como resumo total de cobranças, pesquisa, ordenação e detalhamento de cada cliente/cobrança também estão disponíveis para os usuários da aplicação. O projeto foi realizado por uma equipe de 5 pessoas.'}</p>

              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/payment-management-front' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Front-End</a>
                <a href='https://github.com/Rmdeaguiar/payment-management-back' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />Back-End</a>
                <a href='https://payment-management.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />{english ? 'Project' : 'Projeto'}</a>
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
                <p>{english ? 'Application built for the NG Challenge. An application simulating a bank, where the user can register, enter and have access to some functionalities, such as viewing his balance sheet, transfers, and also to carry out a new bank transaction.' : 'Aplicação construída para o Desafio NG. Uma aplicação simulando um banco, onde o usuário pode se cadastrar, entrar e ter acesso a algumas funcionalidades, como visualização do seu balanço, de suas transferências, e também para realizar uma nova transação bancária.'}</p>
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
                <p>{english ? 'Application built for the artist Denise Colaferro. A website where customers can view available pieces and get in touch directly via WhatsApp or Instagram.' : 'Aplicação construída para a artista Denise Colaferro. Um site onde clientes podem visualizar as peças disponíveis e entrar em contato diretamente pelo WhatsApp ou Instagram.'}</p>
              </div>
            </div>
            <div>
              <div className='links-project'>
                <a href='https://github.com/Rmdeaguiar/atelierdenisecolaferro' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' />{english ? 'Code' : 'Código'}</a>
                <a href='https://atelierdenisecolaferro.netlify.app/' target="_blank" rel='noreferrer'><img src={Link} alt='link' />{english ? 'Project' : 'Projeto'}</a>
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
