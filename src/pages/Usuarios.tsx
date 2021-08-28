import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";

export interface UsuariosProps {}

const Usuarios: React.SFC<UsuariosProps> = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Usuarios;
