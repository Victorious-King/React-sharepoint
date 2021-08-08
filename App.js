import logo from './logo.svg';
import './App.css';

function App() {
  useConstructor(() => {
    sp.setup({
		sp: {
		  headers: {
			Accept: 'application/json;odata=verbose',
		  },
		  baseUrl: 'http://localhost:3000/',
		},
	});
  });
  
    
	private getFileNameControl(){
		sp.web.lists.getByTitle("TestList").items.getById(13);
		item.attachmentFiles.get().then((files)=>{
		console.log(files);
		})
	};
	private uploadFileFromControl(){

		 let file = (document.querySelector("#newfile") as HTMLInputElement).files[0];
		 //Upload a file to the SharePoint Library
		 pnp.sp.web.getFolderByServerRelativeUrl(this.props.ctx.pageContext.web.serverRelativeUrl + "/Shared%20Documents")
		 .files.add(file.name, file, true)
		 .then((data) =>{
		   alert("File uploaded sucessfully");
		 })
		 .catch((error) =>{
		   alert("Error is uploading");
		 });
	}
	private downloadFileFromControl(){

		var config = require("./../private/config.json");
		var sppull = require("sppull").sppull;
		var context = {
		  siteUrl: config.siteUrl,
		  creds: {
			username: config.username,
			password: config.password,
		  }
		};

		var options = {
		  spRootFolder: "/sites/Contracts",
		  dlRootFolder: "./Downloads/Contracts"
		};


		sppull.download(context, options)
		  .then((downloadResults) => {
			console.log("Files are downloaded");
			console.log("For more, please check the results", JSON.stringify(downloadResults));
		  })
		  .catch((err) => {
			console.log("Core error has happened", err);
		  });
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  <div>
		<p>
			<button onClick={() => this.getFileNameControl()} >
						   GetFileName
			</button>
		 </p>
	  </div>
	  <div>
		<input type="file" id="newfile"/>
		<p>
			<button onClick={() => this.uploadFileFromControl()} >
						   Upload
			</button>
		 </p>
	  </div>
	  <div>
		<p>
			<button onClick={() => this.downloadFileFromControl()} >
						   Download
			</button>
		 </p>
	  </div>
    </div>
  );
  
}

export default App;
