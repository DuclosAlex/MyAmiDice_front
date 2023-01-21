import React from 'react';
import News from '../News/News';
import './style.scss';

const news = [
  {
    title: "Monogame",    
    content: `Demetra est en train d'aider le Roi à s'habiller quand le Répurgateur arrive. La jeune femme lui dit bonjour en souriant, et là le Répurgateur se met à lui hurler de se taire et la traite de démon, puis il lui crache aux pieds, sous le regard atterré de Demetra et d'Arthur. Le Répurgateur se calme ensuite et explique qu'il est désolé mais qu'il n'aime pas les femmes.
    
    Arthur, Lancelot, le père Blaise et le Répurgateur sont assis autour d'une table. Le Répurgateur entame une tirade d'éloges en bredouillant, mais le Roi y coupe court et demande ce qu'il se passe. Il lui dit alors qu'il a besoin de lui faire signer une nouvelle loi, essayant de faire comme si c'était anodin. Le père Blaise demande si le Roi avait donné un accord de principe mais ce n'est pas le cas. Le Répurgateur toujours bredouillant trouve que ce n'est pas la peine, qu'il ne veut pas l'ennuyer etc, et il le complimente de nouveau. Il tente ensuite de lui faire signer un papier, Arthur prend une plume et s'apprête à signer, mais avant il demande de lui rappeler de quoi parle la loi. Le Répurgateur lui dit tout en se forçant à sourire que c'est une loi qui interdit la polygamie. Le Roi balance sa plume et croise les bras sans rien dire.
    
    Arthur cherche à comprendre si la loi veut dire qu'il ne peut plus avoir plusieurs femmes en même temps, le Répurgateur confirme. Arthur croit que ça signifie une seule à la fois, mais en fait il ne pourrait en avoir qu'une. Le Roi fronce les sourcils, le Répurgateur tente de lui expliquer, mais Arthur ne veut pas lui servir d'exemple. L'homme se tourne alors vers Lancelot, qui se lance dans une tirade sur sa volonté de ne vouer sa vie qu'au grand Amour. Le Roi le coupe aussitôt. Il désigne le père Blaise, qui bien entendu ne connait pas d'aventures. Tout ça pour en revenir finalement à Arthur. Le Répurgateur explique donc, non sans mal, que sa femme étant Guenièvre, il ne peut aller avec aucune autre femme. Arthur se râclant la gorge dit qu'il va réfléchir. Lancelot trouve que ça peut être une bonne idée même s'il n'en avait jamais entendu parlé, le père Blaise trouve ça moderne, mais ça ne le concerne pas directement. Arthur prétexte que justement, c'est peut-être trop moderne, et enlève la plume de la main du Répurgateur.
    
    Dans sa chambre, le Roi vient de tout raconter à sa femme, qui trouve l'idée stupide et conseille à son mari de se débarrasser du Répurgateur. Arthur confirme en disant qu'un jour ils vont le retrouver pendu à un arbre. Guenièvre dit sur le ton de la conversation qu'Arthur s'ennuierait avec une seule femme, mais il confirme avec beaucoup trop d'enthousiasme. Elle le regarde froidemment, mais passe à autre chose en suggérant à ce qu'on autorise la polygamie pour les femmes. Le Roi laisse échapper un rire, pas du tout convaincu par cette idée.     
    
    Le lendemain dans une salle, le Répurgateur essaie toujours de faire signer Arthur, mais en vain. L'homme finit par avoir une idée, Arthur signe, mais il l'autorise officieusement à continuer de faire comme avant, seulement il devra venir le voir en confession. Le Répurgateur explique que la confession prend cinq minutes et qu'après on peut faire ce qu'on veut.`,
    author: "Répurgateur",
    date: "13 janvier 2018"
  },
  {
    title: "Tarte au myrtilles",    
    content: `Arthur, Léodagan, Guenièvre et Séli finissent leur repas. Arthur et Léodagan sont sur le point de retourner travailler quand Séli les prévient qu'il y a du dessert. Ils refusent mais Séli insiste en expliquant qu'il y a des personnes qui ont préparé ce dessert, donc la moindre des choses est de rester.

    Le dessert est apporté mais Arthur demande ce que c'est. Séli répond assez agressivement que c'est une tarte aux myrtilles. On découvre que c'est elle qui l'a préparée. Les deux hommes sont assez étonnés. Après que le plat soit déposé sur la table, personne n'ose prendre une part, ce qui énerve encore plus Séli. Un court moment plus tard, pendant qu'Arthur, Léodagan et Guenièvre goûtent la tarte, Séli leur demande s'ils aiment. Guenièvre essaye de rassurer sa mère en complimentant les fruits mais Séli ne la croit pas. C'est Arthur qui finit par lui dire que ce n'est pas bon. Séli explique qu'elle a toujours rêvé faire des tartes, surtout pour ses petits-enfants mais elle reproche aux mariés qu'il n'y en ait pas encore. Séli leur explique qu'elle compte en refaire tous les jours jusqu'à y arriver.
    
    Arthur et Léodagan sont sur le point de quitter la table quand Séli leur emballe une part de tarte au cas ou ils auraient faim...`,
    author: "Dame Séli",
    date: "36 octobre 1852"
  },
  {
    title: "Le chevalier de Provence",    
    content: `On retrouve autour de la Table Ronde Léodagan, Perceval, Bohort, Karadoc, Lancelot, Hervé de Rinnel, Calogrenant et le père Blaise derrière son pupitre. Arthur est en train de lire un livre en latin, ce qui n'a pas l'air de passionner les autres. D'ailleurs Bohort et Perceval discutent à voix basse. Le Roi leur fait une remarque, comme s'ils étaient à l'école.
    
    Le père Blaise annonce aux autres l'ordre du jour : résoudre le mystère du chevalier de Provence. Ce dernier fait apparemment parler de lui dans la région et pourtant personne de Kaamelott ne sait qui c'est. Lancelot trouve cette histoire ridicule, et les autres lui rétorquent que ce qui l'agace autant c'est que ce ne soit pas lui ce chevalier gaulois solitaire et héroique dont tout le monde parle. Ensuite, Arthur explique qu'il va peut-être falloir faire une place à ce chevalier autour de la Table Ronde. Lancelot râle, toujours de mauvaise foi, tandis que les autres jugent la Table trop petite pour accueillir un chevalier en plus. Bohort dit qu'il faudrait déjà le trouver, et Léodagan s'interroge sur son nom : à savoir si c'est le Chevalier de Provence, ou le Chevalier Gaulois. Le père Blaise explique qu'il se fait appeler Provencal le Gaulois. Là, Perceval scotche tout le monde en leur disant que c'est de lui qu'il s'agit. Il s'avère qu'il s'est en fait simplement trompé en disant son nom aux villageois, il a mélangé Perceval le Gallois et Provencal le Gaulois ! Ce qui ne manque pas de mettre le Roi en colère, et de laisser les autres perplexes. Ils ne comprennent pas comment on peut se tromper sur son propre nom, et surtout pourquoi Provencal le Gaulois est aussi populaire alors que Perceval ne fait jamais rien d'héroique. Léodagan se moque d'ailleurs en disant que les rares fois où il est capable de faire quelque chose de bien, il se trompe quand on lui demande son nom.
    
    
    Le mystère est donc éclairci. Léodagan ironise en disant que les Gaulois doivent être fiers de "l'enfant du pays", ce à quoi Arthur rétorque que les enfants du pays de Provence nés au pays de Galles sont plutôt rares. Perceval dit que ça n'empêche pas qu'il est malgré tout une légende.`,
    author: "Provencal de Galle",
    date: "16 janvier 1600"
  }
]

function NewMemberList() {
  return (
    <div className='news-container'>
        <div className='newsList'>
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