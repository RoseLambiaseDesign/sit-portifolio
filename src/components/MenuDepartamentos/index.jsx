import "./styles.css"
const MenuDepartamentos = () => {
    return (<>

        <div className="container	destaque">
            <section className="busca">
                <h2>Busca</h2>
                <form>
                    <input type="search"></input>
                    <button>Buscar</button>
                </form>
            </section>


            <section className="menu-departamentos">
                <h2>Departamentos</h2>
                <nav>
                    <ul>
                        <li><a href="#">Blusas	e	Camisas</a></li>
                        <li><a href="#">Calças</a></li>
                        <li><a href="#">Saias</a></li>
                        <li><a href="#">Vestidos</a></li>
                        <li><a href="#">Sapatos</a></li>
                        <li><a href="#">Bolsas	e	Carteiras</a></li>
                        <li><a href="#">Acessórios</a></li>
                    </ul>
                </nav>
            </section>

            <section className="banner-destaque">
                <figure>
                    <img src="src\Public\Promocao.jpg" alt="Promoção:Big City Night" />
                </figure>
            </section>

        </div>

    </>)
}
export default MenuDepartamentos;
