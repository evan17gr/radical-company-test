import styled from "styled-components";

export const NavBar = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:75%;
    height:10%;
    padding-top:15px;
    padding-left:30px;
    margin-bottom:50px;
`;

export const HomeButtonSection = styled.section`
    display:flex;
    height:90%;
    align-items:center;
`;

export const HomeButton = styled.i`
    color:#044B35;
    font-size:27px;
    cursor:pointer;
`; 

export const OpportunityIndicator = styled.a`
    text-decoration: none; 
    position: relative; 

    &:after{
        position: absolute;
        content: '';
        height: 2px;
        bottom: -4px; 
        background:#2afbca;
        margin: 0 auto;
		left: 0;
        right: 0;
		width: 60%;
    }
`;

export const ArticleHeader = styled.header`
    text-align:center;
`;

export const Article = styled.article`
    display:flex;
    flex-direction:column;
    height:20%;
    width:82%;
    text-align:center;

    p{
        margin-right:20px;
    }
`;

export const Section = styled.section`
    display:flex;
    justify-content:center;
    margin-bottom:50px;
`;

export const InputsSection = styled.section`
    display:flex;
    margin-bottom: 40px;
    justify-content:center;
    height:100%;
    width:100%;

`;

export const InputsForm = styled.div`
    display:flex;
    width:100%;
    padding:0 5%;
    justify-content:space-between;
`;

export const SelectButtonDiv = styled.div`

`;

export const LeftDiv = styled.div`

`;

export const ArrowDiv = styled.div`
    display:flex;
`;

export const RightDiv = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1;
    max-width: 150px;
    width: 100%;

    p{
        border-bottom:2px solid #edf2f0;
        margin-bottom:4px;
        cursor:pointer;
        text-align:center;
    }
`;

export const BottomDiv = styled.div`
    display:flex;
`;

export const WholeSection = styled.section`
    display:flex;
    flex-direction:column;
    height:100%;
    margin:0 20px;
    width: calc(25% - 120px);
    position:relative;
    justify-content:flex-end;

    p{
        font-family:"Calibre-Regular"
    }
`;

export const SideDiv = styled.div`
    display:flex;
    height:100%;
    align-items:flex-end;
`;

export const TopSection = styled.section`
    display:flex;
    margin-bottom:10px;
    padding-top:${props => props.padding ? "21px" : "0px"};
    border-bottom:${props => props.border ? "2px solid #2afbca" : ""};

    input{
        width:100%;
    }
`;

export const SelectDiv = styled.div`
    display:flex;
    width:100%;
`;


export const MidHeaderElement = styled.header`
    width:90%;
`;

export const MidHeaderSection = styled.section`
    display:flex;
    justify-content:center;
    margin-bottom:15px;
`;

export const Container = styled.section`
    display:flex;
    justify-content:center;

`;

export const ContainerSection = styled.section`
    display:flex;
    width:90%;
`;

export const BottomArticle = styled.article`
    display:flex;
    flex-direction:column;
    width:100%;
    padding-bottom:0px;
`;

export const BottomAside = styled.aside`
    display:flex;
    flex-direction:column;
    padding-top:12px;
    margin-left:70px;
    width:35%;
    height:90%;
`;

export const IconsSection = styled.section`
    display:flex;
    align-items:center;
    width:100%;
`;

export const IconSection = styled.section`
    display:flex;
    flex-direction:column;
    border:${props => props.border ? "" : "3px solid #2AFBCA"};
    border-radius:5px;
    text-align:center;
    background:${props => props.background ? "linear-gradient(0deg, rgba(42,251,202,1) 0%, rgba(29,182,169,1) 50%, rgba(125,124,207,1) 100%)" : ""};
    width:${props => props.wider ? "28%" : "calc(72%/3)" };
    height:${props => props.bigger ? "100%" : "90%" };
    align-items:center;
    justify-content:center;
    margin-right:${props => props.margin ? "0px" : "25px" };
    padding:25px 5px;

    p{
        color: ${props => props.color ? "white" : "" };
    }
`;

export const IconImage = styled.img`
    width:70px;
    height:70px;
    padding-bottom:10px;
`;

export const BottomNumbersSection = styled.section`
    background-color:#EDF2F0;
    border-radius:5px;
    margin-top:40px;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export const CostsSection = styled.section`
    display:flex;
    justify-content:center;
    padding-top:50px;

    section{
        display:flex;
        flex-direction:column;
        text-align:center;
        padding-left:70px;
        
    }

    
`;

export const BoldParagraph = styled.p`
    font-size:30px;
    font-weight:600;
    padding-top:5px;
`;

export const BulletPointsSection = styled.section`
    display:flex;
    justify-content:space-evenly;
    padding-top:30px;
    
    section ul li{
        padding-bottom:15px;
    }
`;

export const DownloadSection = styled.section`
    display:flex;
    justify-content:center;
    padding:20px 0;

    i{
        transform: rotate(-90deg);
        font-size:25px;
    }

    p{
        margin-left:25px;
        padding:1px 12px;
        border:2px solid black;
    }

    p,i{
        cursor:pointer;
    }
`;

export const RangeInputSection = styled.section`
    padding-bottom:40px;

    h3{
        padding-bottom:15px;
    }

    input[type='range'] {
      overflow: hidden;
      -webkit-appearance: none;
      background: linear-gradient(-90deg, rgba(42,251,202,1) 0%, rgba(29,182,169,1) 50%, rgba(125,124,207,1) 100%);
      border-radius:50px;
      height:22px;
    }

    input[type='range']::-webkit-slider-runnable-track {
      height: 22px;
      -webkit-appearance: none;
    }

    input[type='range']::-webkit-slider-thumb {
      width: 16px;
      border-radius:60%;
      -webkit-appearance: none;
      height: 16px;
      cursor: pointer;
      background: rgba(125,124,207,1);
      box-shadow: 0px 0px 0px 3px  white;
      margin-top:3px;
    }

    input{
        width:95%;
    }

    section{
        padding-top:15px;
        display:flex;
    }
`;

export const FigCaption = styled.figcaption`
    width:70%;
`;

export const FigCaption2 = styled.figcaption`
    width:50%;
    display:flex;
    justify-content:center;
    
    
`;


