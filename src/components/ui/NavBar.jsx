// import React from 'react';

// export default function NavBar() {
//   return (
//     <nav className="navbar navbar-expand bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">Зоопарк</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <a className="nav-link active" aria-current="page" href="/animals">Животные</a>
//             <a className="nav-link" href="/tarifs">Тарифы</a>
//             <a className="nav-link"  href="/admin" style={{ marginLeft: 'auto' }}>Вход</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React from 'react';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Zoo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/animals">Животные</a>
                        <a className="nav-link" href="/tarifs">Тарифы</a>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="/admin" style={{ marginLeft: 'auto', marginRight: '40px' }}>Вход</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}