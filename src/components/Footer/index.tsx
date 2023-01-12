import { StyledFooter } from "./style";
import GitHubIcon from "@mui/icons-material/GitHub";
export function Footer() {
  return (
    <StyledFooter>
      <h3>Site com intuito meramente educacional</h3>
      <section>
        <div>
          <h3>Sobre</h3>
          <a href="/">WeeToy</a>
          <a href="/">Trabalhe conosco</a>
          <a href="/">Investidores</a>
        </div>
        <div>
          <h3>Parceiros</h3>
          <a target="blank" href="https://kenzie.com.br/">
            Kenzie Academy Brasil
          </a>
        </div>
        <div>
          <h3>Redes Sociais</h3>

          <a target="blank" href="https://github.com/Brunohgs21">
            <GitHubIcon color="action" />
            Bruno
          </a>

          <a target="blank" href="https://github.com/DiegoAndreLeffa">
            <GitHubIcon color="action" />
            Diego
          </a>
          <a target="blank" href="https://github.com/gyo-almeida">
            <GitHubIcon color="action" />
            Gyovanna
          </a>
          <a target="blank" href="https://github.com/NathMedeiros">
            <GitHubIcon color="action" />
            Nathalia
          </a>
          <a target="blank" href="https://github.com/Lelouching">
            <GitHubIcon color="action" />
            Jhonata
          </a>
          <a target="blank" href="https://github.com/ricardocza">
            <GitHubIcon color="action" />
            Ricardo
          </a>
        </div>
      </section>
    </StyledFooter>
  );
}
