import { StyledFooter } from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <LinkedInIcon color="primary" />
            Bruno
          </a>

          <a target="blank" href="https://github.com/DiegoAndreLeffa">
            <LinkedInIcon color="primary" />
            Diego
          </a>
          <a target="blank" href="https://github.com/gyo-almeida">
            <LinkedInIcon color="primary" />
            Gyovanna
          </a>
          <a target="blank" href="https://github.com/NathMedeiros">
            <LinkedInIcon color="primary" />
            Nathalia
          </a>
          <a target="blank" href="https://github.com/Lelouching">
            <LinkedInIcon color="primary" />
            Jhonata
          </a>
          <a target="blank" href="https://github.com/ricardocza">
            <LinkedInIcon color="primary" />
            Ricardo
          </a>
        </div>
      </section>
    </StyledFooter>
  );
}
