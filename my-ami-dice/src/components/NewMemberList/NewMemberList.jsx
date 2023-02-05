import { useEffect } from 'react';
import News from '../News/News';
import './style.scss';

const news = [
  {
    title: "Monogame",    
    content: `Demetra est en train d'aider le Roi à s'habiller quand le Répurgateur arrive. La jeune femme lui dit bonjour en souriant, et là le Répurgateur se met à lui hurler de se taire et la traite de démon, puis il lui crache aux pieds, sous le regard atterré de Demetra et d'Arthur. Le Répurgateur se calme ensuite et explique qu'il est désolé mais qu'il n'aime pas les femmes.
    
    Arthur, Lancelot, le père Blaise et le Répurgateur sont assis autour d'une table. Le Répurgateur entame une tirade d'éloges en bredouillant, mais le Roi y coupe court et demande ce qu'il se passe. Il lui dit alors qu'il a besoin de lui faire signer une nouvelle loi, essayant de faire comme si c'était anodin. Le père Blaise demande si le Roi avait donné un accord de principe mais ce n'est pas le cas. Le Répurgateur toujours bredouillant trouve que ce n'est pas la peine, qu'il ne veut pas l'ennuyer etc, et il le complimente de nouveau. Il tente ensuite de lui faire signer un papier, Arthur prend une plume et s'apprête à signer, mais avant il demande de lui rappeler de quoi parle la loi. Le Répurgateur lui dit tout en se forçant à sourire que c'est une loi qui interdit la polygamie. Le Roi balance sa plume et croise les bras sans rien dire.`,
    author: "Répurgateur",
    date: "13 janvier 2018"
  },
  {
    title: "Tarte au myrtilles",    
    content: `Arthur, Léodagan, Guenièvre et Séli finissent leur repas. Arthur et Léodagan sont sur le point de retourner travailler quand Séli les prévient qu'il y a du dessert. Ils refusent mais Séli insiste en expliquant qu'il y a des personnes qui ont préparé ce dessert, donc la moindre des choses est de rester.

    Le dessert est apporté mais Arthur demande ce que c'est. Séli répond assez agressivement que c'est une tarte aux myrtilles. On découvre que c'est elle qui l'a préparée. Les deux hommes sont assez étonnés. Après que le plat soit déposé sur la table, personne n'ose prendre une part, ce qui énerve encore plus Séli. Un court moment plus tard, pendant qu'Arthur, Léodagan et Guenièvre goûtent la tarte, Séli leur demande s'ils aiment. Guenièvre essaye de rassurer sa mère en complimentant les fruits mais Séli ne la croit pas. C'est Arthur qui finit par lui dire que ce n'est pas bon. Séli explique qu'elle a toujours rêvé faire des tartes, surtout pour ses petits-enfants mais elle reproche aux mariés qu'il n'y en ait pas encore. Séli leur explique qu'elle compte en refaire tous les jours jusqu'à y arriver.`,
    author: "Dame Séli",
    date: "36 octobre 1852"
  },
  {
    title: "Le chevalier de Provence",    
    content: `On retrouve autour de la Table Ronde Léodagan, Perceval, Bohort, Karadoc, Lancelot, Hervé de Rinnel, Calogrenant et le père Blaise derrière son pupitre. Arthur est en train de lire un livre en latin, ce qui n'a pas l'air de passionner les autres. D'ailleurs Bohort et Perceval discutent à voix basse. Le Roi leur fait une remarque, comme s'ils étaient à l'école.
    
    Le père Blaise annonce aux autres l'ordre du jour : résoudre le mystère du chevalier de Provence. Ce dernier fait apparemment parler de lui dans la région et pourtant personne de Kaamelott ne sait qui c'est. Lancelot trouve cette histoire ridicule, et les autres lui rétorquent que ce qui l'agace autant c'est que ce ne soit pas lui ce chevalier gaulois solitaire et héroique dont tout le monde parle. Ensuite, Arthur explique qu'il va peut-être falloir faire une place à ce chevalier autour de la Table Ronde. Lancelot râle, toujours de mauvaise foi, tandis que les autres jugent la Table trop petite pour accueillir un chevalier en plus. Bohort dit qu'il faudrait déjà le trouver, et Léodagan s'interroge sur son nom : à savoir si c'est le Chevalier de Provence, ou le Chevalier Gaulois.`,
    author: "Provencal de Galle",
    date: "16 janvier 1500"

  }
]

function NewMemberList () {

 /* useEffect(async () => {
    const newsData = await api.get("/news")

  }, [])*/

  return (
    <div className='news-container'>
        <div className='news-list'>
            {news.map((article) => (
                <News
                    key = {article.title}
                    title = {article.title}
                    content = {article.content}
                    author = {article.author}
                    date = {article.date}                
                />
            ))}
        </div>
    </div>
  )
}
 



export default NewMemberList