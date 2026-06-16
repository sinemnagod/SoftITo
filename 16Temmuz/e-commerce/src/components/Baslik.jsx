export default function Baslik(){
    return(
        <>
        <header className="eticaret-header">
            <div className="header-ust-alan">
                <div className="logo-alani">
                    <div className="site-logo-link">Hepsi11</div>
                    <span className="site-logo-badge">Store</span>
                </div>

                <div className="arama-alani">
                    <input type="text" placeholder="Ürün,Kategori Ara" className="arama-input" />
                    <button className="arama-butonu">Ara</button>
                </div>
                
                <div className="kullanici-kontroller">
                    <div className="menu-linki">Giriş Yap</div>
                    <div className="menu-linki">Siparişlerim</div>
                    <button className="sepet-tetikleyici">Sepetim</button>
                </div>
            </div>

            <div className="kategori-seridi">
                <span className="badge badge-gray">K</span>
                <span className="detail-meta-label">Çözünürlük</span>
            </div>
        </header>
        </>
    );
}