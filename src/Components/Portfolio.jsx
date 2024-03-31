import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BarLoader} from 'react-spinners'



export default function Portfolio() {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.github.com/users/Sami3Goran/repos'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const filteredRepos = data.filter(repo => {
                    return repo.language === "C#"
                })

                setTimeout(() => {
                    setRepos(filteredRepos)
                    setIsLoading(false)
                }, 3000)

            })
    }, [])

    if(isLoading){
        return <BarLoader
        color="#ee00ff"
        height={10}
        width={300}
      />
    }

    return (
        <div className='main'>
            {
                repos.map(repo => {
                    return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/interior-empty-science-laboratory-with-modern-equipment-prepared-pharmaceutical-innovation-using-high-tech-microbiology-tools-scientific-research-vaccine-development-against-covid19-virus_482257-12800.jpg" />
                        <Card.Body>
                            <Card.Title>
                                <h3>Project name:</h3>
                                <p>{repo.name}</p>
                                {
                                    repo.owner.login
                                }
                            </Card.Title>
                            <Card.Text>
                                <h3>Used language:</h3>
                                <p>{repo.language}</p>
                            </Card.Text>
                            <Button variant="info"><Card.Link href={repo.html_url}>Another Link</Card.Link></Button>
                        </Card.Body>
                    </Card>
                )})
            }
        </div>
    )

}