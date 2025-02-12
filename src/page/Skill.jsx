import React from 'react'
import '../css/Skill.css'

const Skill = () => {
    const skills = {
        frontend: [
            { name: 'React', icon: '⚛️' },
            { name: 'HTML', icon: '📄' },
            { name: 'CSS', icon: '🎨' },
            { name: 'JSX', icon: '🔷' }
        ],
        backend: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Express', icon: '🚀' },
            { name: 'REST API', icon: '🔗' }
        ],
        database: [
            { name: 'MySQL', icon: '🛢️' },
            { name: 'MongoDB', icon: '🍃' },
        ],
        languages: [
            { name: 'JavaScript', icon: '📜' },
            { name: 'Java', icon: '♨️' },
            { name: 'Python', icon: '🐍' },
            { name: 'C++', icon: 'C++' }
        ],
        developmentEnvironments: [
            { name: 'VS Code', icon: '🆚' },
            { name: 'IntelliJ IDEA', icon: '👨🏻‍💻' },
            { name: 'Chrome Dev Tool', icon: '🔧' },
            { name: 'Github', icon: '</>' }
        ]
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>My Expertise </h2>
            <div style={styles.grid}>
                {/* Frontend Section */}
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>🖥️ Frontend</h3>
                    <div style={styles.itemsContainer}>
                        {skills.frontend.map((skill, index) => (
                            <div key={index} style={styles.card}>
                                <span style={styles.icon}>{skill.icon}</span>
                                <h4 style={styles.skillName}>{skill.name}</h4>
                                <div>
                                    {skill.expertise}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Section */}
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>⚙️ Backend</h3>
                    <div style={styles.itemsContainer}>
                        {skills.backend.map((skill, index) => (
                            <div key={index} style={styles.card}>
                                <span style={styles.icon}>{skill.icon}</span>
                                <h4 style={styles.skillName}>{skill.name}</h4>
                                <div>
                                    {skill.expertise}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Database Section */}
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>💾 Database</h3>
                    <div style={styles.itemsContainer}>
                        {skills.database.map((skill, index) => (
                            <div key={index} style={styles.card}>
                                <span style={styles.icon}>{skill.icon}</span>
                                <h4 style={styles.skillName}>{skill.name}</h4>
                                <div>
                                    {skill.expertise}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages Section */}
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>📚 Languages</h3>
                    <div style={styles.itemsContainer}>
                        {skills.languages.map((skill, index) => (
                            <div key={index} style={styles.card}>
                                <span style={styles.icon}>{skill.icon}</span>
                                <h4 style={styles.skillName}>{skill.name}</h4>
                                <div >
                                    {skill.expertise}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>🛠 Tools </h3>
                    <div style={styles.itemsContainer}>
                        {skills.developmentEnvironments.map((skill, index) => (
                            <div key={index} style={styles.card}>
                                <span style={styles.icon}>{skill.icon}</span>
                                <h4 style={styles.skillName}>{skill.name}</h4>
                                <div >
                                    {skill.expertise}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function for expertise colors

// Styling
const styles = {
    container: {
        margin: '2rem',
        padding: '2rem',
        backgroundColor: '#232946',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        background: 'linear-gradient(45deg, #00ff88, #00b4d8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
    },
    section: {
        backgroundColor: '#cdd8e4',
        padding: '1.5rem',
        borderRadius: '12px',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'translateY(-5px)'
        }
    },
    sectionTitle: {
        color: '#232946',
        fontSize: '1.5rem',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '2px solid #232946'
    },
    itemsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    card: {
        backgroundColor: '#232946',
        padding: '1rem',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        transition: 'all 0.3s ease',
        ':hover': {
            backgroundColor: '#3d3d3d',
            transform: 'scale(1.02)'
        }
    },
    icon: {
        fontSize: '1.8rem'
    },
    skillName: {
        color: '#fff',
        margin: '0',
        flexGrow: 1,
        fontSize: '1.1rem'
    },
    expertise: {
        color: '#fff',
        padding: '0.3rem 0.8rem',
        borderRadius: '20px',
        fontSize: '0.8rem',
        fontWeight: 'bold'
    }
};

export default Skill
