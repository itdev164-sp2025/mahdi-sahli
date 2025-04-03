export { List } from './List';
export { ListItem } from './ListItem';
import { List, ListItem } from '../components/List';
<List width={["100%", "80%", "60%"]} p={2}>
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <ListItem key={node.id} p={2}>
      {node.frontmatter.title}
    </ListItem>
  ))}
</List>
