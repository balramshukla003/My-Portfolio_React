const SkillShowcase = () => {
    const skills = {
        frontend: [
            { name: 'React', icon: '⚛️', expertise: 'Advanced' },
            { name: 'HTML5', icon: '📄', expertise: 'Expert' },
            { name: 'CSS3', icon: '🎨', expertise: 'Expert' },
            { name: 'JSX', icon: '🔷', expertise: 'Advanced' }
        ],
        backend: [
            { name: 'Node.js', icon: '🟢', expertise: 'Advanced' },
            { name: 'Express', icon: '🚀', expertise: 'Proficient' },
            { name: 'REST API', icon: '🔗', expertise: 'Advanced' }
        ],
        database: [
            { name: 'PostgreSQL', icon: '🐘', expertise: 'Proficient' },
            { name: 'MongoDB', icon: '🍃', expertise: 'Intermediate' },
            { name: 'Redis', icon: '🗃️', expertise: 'Basic' }
        ],
        languages: [
            { name: 'JavaScript', icon: '📜', expertise: 'Expert' },
            { name: 'TypeScript', icon: '📘', expertise: 'Proficient' },
            { name: 'Python', icon: '🐍', expertise: 'Intermediate' }
        ]
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Full-Stack Development Skills</h2>
            <div style={styles.grid}>
                {/* Frontend Section */}
                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>🖥️ Frontend</h3>
                    <div style={styles.itemsContainer}>
                        {skills.frontend.map((skill, index) => (
                            <div key={index} style={styles.card}>
                                <span style={styles.icon}>{skill.icon}</span>
                                <h4 style={styles.skillName}>{skill.name}</h4>
                                <div style={{
                                    ...styles.expertise,
                                    backgroundColor: getExpertiseColor(skill.expertise)
                                }}>
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
                                <div style={{
                                    ...styles.expertise,
                                    backgroundColor: getExpertiseColor(skill.expertise)
                                }}>
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
                                <div style={{
                                    ...styles.expertise,
                                    backgroundColor: getExpertiseColor(skill.expertise)
                                }}>
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
                                <div style={{
                                    ...styles.expertise,
                                    backgroundColor: getExpertiseColor(skill.expertise)
                                }}>
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
const getExpertiseColor = (level) => {
    const colors = {
        'Basic': '#ff6b6b',
        'Intermediate': '#4ecdc4',
        'Proficient': '#45b7d1',
        'Advanced': '#54a0ff',
        'Expert': '#2ecc71'
    };
    return colors[level] || '#999';
};

// Styling
const styles = {
    container: {
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#1a1a1a',
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
        backgroundColor: '#2d2d2d',
        padding: '1.5rem',
        borderRadius: '12px',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'translateY(-5px)'
        }
    },
    sectionTitle: {
        color: '#fff',
        fontSize: '1.5rem',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '2px solid #00ff88'
    },
    itemsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    card: {
        backgroundColor: '#333',
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

export default SkillShowcase;