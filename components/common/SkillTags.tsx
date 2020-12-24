
import styled from "styled-components";

const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  div:not(:first-child) {
    margin-left: 8px;
  }
`;

const Tag = styled.div`
  color: ${props => colors[props.tag] && colors[props.tag].color};
  background: "rgba(0,0,0,0.50)";
  border-color: ${props => colors[props.tag] && colors[props.tag].border};
  display: inline-block;
  line-height: 20px;
  height: 22px;
  padding: 0 7px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  font-size: 12px;
  white-space: nowrap;
  margin-bottom: 5px;
`;

const colors = {
  React: {
    color: "rgb(97,218,251)",
    border: "rgba(97,218,251,0.5)"
  },
  ES6: {
    color: "rgba(247, 223, 30, 1)",
    border: "rgba(247, 223, 30, 0.5)"
  },
  "Express.js": {
    color: "rgba(247, 223, 30, 1)",
    border: "rgba(247, 223, 30, 0.5)"
  },
  JavaScript: {
    color: "rgba(247, 223, 30, 1)",
    border: "rgba(247, 223, 30, 0.5)"
  },
  "Styled Components": {
    color: "rgb(255, 152, 187)",
    border: "rgba(255, 152, 187,0.5)"
  },
  Redux: {
    color: "rgb(188,144,255)",
    border: "rgba(188,144,255,0.5)"
  },
  "Node.js": {
    color: "rgb(102,210,100)",
    border: "rgba(102,210,100,0.5)"
  },
  Docker: {
    color: "rgb(56,170,255)",
    border: "rgba(56,170,255,0.5)"
  },
  Redis: {
    color: "rgb(255,0,0)",
    border: "rgba(255,0,0,0.5)"
  },
  PostgreSQL: {
    color: "rgb(151,203,245)",
    border: "rgb(151,203,245,0.5)"
  },
  Python: {
    color: "rgb(125, 188, 241)",
    border: "rgb(125, 188, 241,0.5)"
  }
};

const SkillTags = ({ tags }) => {
  return (
    <Tags>
      {tags.map(tag => {
        return (
          <Tag tag={tag} key={`tag-${tag}`}>
            {tag}
          </Tag>
        );
      })}
    </Tags>
  );
};

export default SkillTags;
