import myResume from '../assets/resume.json'

export default function Resume() {
    return (
        <>
            <main>
                <h1>Resume</h1>
                <section>

                    <div>
                    <h3 className='rse-title'>Work</h3>
                        {
                            myResume.resume.slice(0, Math.ceil(myResume.resume.length / 3)).map((e, index) => (
                                <article key={index}>
                                    <h3>{e.workplace} | {e.role}</h3>
                                    <p >{e.date}</p>
                                    <p>{e.description}</p>
                                </article>
                            ))
                        }

                    </div>
                    <div>
                    <h3 className='rse-title'>Education</h3>
                        {
                            myResume.resume.slice(Math.ceil(myResume.resume.length / 3)).map((e, index) => (
                                <article key={index}>
                                    <h3>{e.education} | {e.school}</h3>
                                    <p className="date">{e.date}</p>
                                </article>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}