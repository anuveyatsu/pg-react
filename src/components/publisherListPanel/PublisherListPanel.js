import React from 'react';

const PublisherListPanel = () => {
    return (
    	<div>
			<div>
				<h2>Explore Popular data packages</h2>
				<ul className="list-group col-lg-12">
					<a className="list-group-item" href="/core">Explore Core data packages</a>
				</ul>
			</div>
			<div>
				<h2>Publisher You are associated with</h2>
				<ul className="list-group col-lg-12">
					<a className="list-group-item" href="/admin">admin</a>
				</ul>
			</div>
		</div>
    );
};

export default PublisherListPanel;
