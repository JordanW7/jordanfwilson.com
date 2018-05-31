import React from 'react';
import { Row, Col, Icon, Card } from 'antd';
import './About.css';

const About = (props) => {
  return (
    <div className="aboutfull">
  	<div className="about">
    	<Row type="flex">
        <Col span={12} className="about_header">
          <span className="about_font"><Icon type="message"  style={{ fontSize: "50" }} /> About Me</span>
    		</Col>
    		<Col span={12} className="about_header2">
    			<span className="about_font2">Here's why I build.</span>
    		</Col>
        <Col span={24} className="about_card">
        <Card>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ultrices risus, ut pharetra massa. Suspendisse eleifend bibendum massa rhoncus condimentum. Integer aliquet congue urna, id ultricies lorem varius vel. Phasellus et egestas urna. Etiam interdum orci convallis tincidunt vestibulum. Aenean justo lectus, venenatis quis molestie viverra, fermentum volutpat ipsum. Morbi ac diam aliquet tellus consectetur finibus sed eget dui. Duis congue purus pellentesque ex mollis, at sollicitudin diam placerat. In hac habitasse platea dictumst.

Maecenas auctor quam pulvinar, posuere tortor commodo, commodo orci. Sed ac libero ac risus varius suscipit a non dui. Nam non turpis tincidunt, hendrerit odio a, efficitur tellus. Aenean vitae lobortis metus. Fusce non iaculis nisl, non vulputate dolor. Ut dolor orci, semper sit amet ultrices in, convallis ac metus. Maecenas eget consequat eros, eget congue elit. Integer eget lectus commodo, auctor orci non, convallis massa. Nam placerat in justo sed faucibus. Phasellus nec velit dolor. Fusce sit amet lectus sit amet nulla sodales fringilla. Ut et justo a justo scelerisque ullamcorper eget vitae risus. Curabitur dignissim tempor dui eget lobortis. Donec pretium dignissim massa et rutrum. Nulla non pulvinar est. Sed aliquam, elit ac commodo tristique, ligula ante mattis neque, eget sagittis nisi dui eu nisi.

Pellentesque rhoncus turpis ac lectus fringilla, ac lacinia tellus hendrerit. Nulla ultrices tortor vitae leo pharetra, id pharetra odio faucibus. Mauris laoreet ipsum vel risus aliquam tempus. Integer interdum egestas sagittis. Etiam convallis nisi eu consectetur tristique. Quisque et ullamcorper nisl, non tristique odio. Fusce posuere euismod magna, vel iaculis magna iaculis in. Donec ut nibh quis enim sagittis feugiat ut eget ex. Vestibulum malesuada tortor arcu, id sagittis leo sagittis ac. Nullam vulputate erat ultrices purus lacinia, a facilisis sem varius. Mauris iaculis neque ut ultricies egestas. Suspendisse quis ex enim. Donec non hendrerit velit, eget vestibulum tellus. Proin blandit dui sapien, in vulputate nulla maximus et. Praesent ut scelerisque neque, eu consectetur nunc. Morbi finibus tellus mi, sit amet cursus erat varius ut.
        </Card>
        </Col>
        </Row>
      </div>
      </div>
  );
}

export default About;
