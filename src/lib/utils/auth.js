export const authService = {
  // Connexion
  login: (email, password) => {
    if (typeof window === 'undefined') return { success: false };
    
    const users = JSON.parse(localStorage.getItem('pulsai_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;
      
      localStorage.setItem('pulsai_currentUser', JSON.stringify(userWithoutPassword));
      localStorage.setItem('pulsai_token', 'token-' + Date.now());
      return { success: true, user: userWithoutPassword };
    }
    return { success: false, error: 'Email ou mot de passe incorrect' };
  },
  
  // Inscription
  register: (userData) => {
    if (typeof window === 'undefined') return { success: false };
    
    const users = JSON.parse(localStorage.getItem('pulsai_users') || '[]');
    
    // Vérifier si l'email existe déjà
    if (users.find(u => u.email === userData.email)) {
      return { success: false, error: 'Cet email est déjà utilisé' };
    }
    
    const newUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('pulsai_users', JSON.stringify(users));
    
    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    
    localStorage.setItem('pulsai_currentUser', JSON.stringify(userWithoutPassword));
    localStorage.setItem('pulsai_token', 'token-' + Date.now());
    
    return { success: true, user: userWithoutPassword };
  },
  
  // Déconnexion
  logout: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('pulsai_currentUser');
    localStorage.removeItem('pulsai_token');
  },
  
  // Vérifier si authentifié
  isAuthenticated: () => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('pulsai_token');
  },
  
  // Récupérer l'utilisateur actuel
  getCurrentUser: () => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('pulsai_currentUser');
    return user ? JSON.parse(user) : null;
  }
};