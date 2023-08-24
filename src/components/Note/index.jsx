import { Container } from "./styles";
import { Tag } from "../Tag";

export function Note({ data, showTags, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {showTags && data.tags && data.tags.length > 0 && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
