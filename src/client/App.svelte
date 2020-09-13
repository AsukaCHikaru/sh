<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./Home.svelte";
  import News from "./News.svelte";
  import Heroes from "./Heroes.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/news">News</Link>
    <Link to="/heroes">Heroes</Link>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="/news" component={News} />
    <Route path="/heroes" component={Heroes} />
  </div>
</Router>
