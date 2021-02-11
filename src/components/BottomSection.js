import React from 'react'
import { BottomArticle, BottomAside, IconImage, Container, ContainerSection, IconsSection, IconSection, BottomNumbersSection, CostsSection, BoldParagraph, BulletPointsSection, DownloadSection, RangeInputSection, FigCaption2, FigCaption } from '../styled-components/StyledElements';
import Timer from "../Icons/efficiency.svg";
import Brand from "../Icons/brand.svg";
import Custom from "../Icons/custom.svg";
import Innovetion from "../Icons/innovetion.svg";


const BottomSection = () => {
    return (
        <Container>
            <ContainerSection>
                <BottomArticle>
                    <IconsSection>
                        <IconSection>
                            <IconImage src={Timer}></IconImage>
                            <p>
                            Aim for eficiency and <br/> productivity
                            </p>
                        </IconSection>
                        <IconSection wider color border background bigger>
                            <IconImage src={Innovetion}></IconImage>
                            <p>
                            Aim for innovation and <br/>collaboration
                            </p>
                        </IconSection>
                        <IconSection>
                            <IconImage src={Brand}></IconImage>
                            <p>
                            Aim for talent and <br/>brand
                            </p>
                        </IconSection>
                        <IconSection margin>
                            <IconImage src={Custom}></IconImage>
                            <p>
                            Custom <br/>scenario
                            </p>
                        </IconSection>
                    </IconsSection> 
                    <BottomNumbersSection>
                        <section>
                            <CostsSection>
                                <section>
                                    <p>Space required:  </p>
                                    <BoldParagraph>150sqm</BoldParagraph>
                                </section>
                                <section>
                                    <p>Fit-out cost:</p>
                                    <BoldParagraph>€100,000</BoldParagraph>
                                </section>
                                <section>
                                    <p>Potential space saving:</p>
                                    <BoldParagraph>150sqm</BoldParagraph>
                                </section>
                            </CostsSection>
                        </section>
                        <BulletPointsSection>
                            <section>
                                <ul>
                                    <li><p>Key benefit statements shown here</p></li>
                                    <li><p>Key benefit statements shown here</p></li>
                                </ul>
                            </section>
                            <section>
                                <ul>
                                    <li><p>Key benefit statements shown here</p></li>
                                    <li><p>Key benefit statements shown here</p></li>
                                </ul>
                            </section>
                        </BulletPointsSection>
                        <DownloadSection>
                            <i className="fas fa-sign-in-alt"></i>
                            <p>.PDF</p>
                            <p>.PNG</p>
                        </DownloadSection>
                    </BottomNumbersSection>
                </BottomArticle>
                <BottomAside>
                        <RangeInputSection>
                            <h3>In our future workplace work will be conducted</h3>
                            <input type="range" min="1" max="100" value="50"></input>
                            <section>
                                <FigCaption>
                                    <p>
                                    Anywhere at <br/>anytime
                                    </p>
                                </FigCaption>
                                <FigCaption2>
                                    <p>
                                    Mainly from the <br/>ofice
                                    </p>
                                </FigCaption2>
                            </section>
                        </RangeInputSection>
                        <RangeInputSection>
                            <h3>Our future workplace will: </h3>
                            <input type="range" min="1" max="100" value="75"></input>
                            <section>
                                <FigCaption>
                                    <p>
                                    Provide a <br/>diferentiating <br/>experience 
                                    </p>
                                </FigCaption>
                                <FigCaption2>
                                    <p>
                                    Provide the <br/>necessities
                                    </p>
                                </FigCaption2>
                            </section>
                        </RangeInputSection>
                        <RangeInputSection>
                            <h3>When we think about individual seats in the ofice:</h3>
                            <input type="range" min="1" max="100" value="25"></input>
                            <section>
                                <FigCaption>
                                    <p>
                                    Depends on activity <br/>or need
                                    </p>
                                </FigCaption>
                                <FigCaption2>
                                    <p>
                                    Depends on title and <br/>position
                                    </p>
                                </FigCaption2>
                            </section>
                        </RangeInputSection>
                </BottomAside>
            </ContainerSection>
        </Container>
    )
}

export default BottomSection
