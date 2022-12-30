import { loginWithEmailPassword, singInWithGoogle } from '../../../src/firebase/providers'
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../../src/store/auth/thunks'
import { demoUser } from '../../fixtures/authFixtures'

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn()
    beforeEach(() => jest.clearAllMocks())

    test('Debe invocar el checkingCredentials', async() => {

        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )

    })

    test('startGoogleSignIn debe llamar checkingCredentials y login - Exito', async() => {
      
        const loginData = { ok: true, ...demoUser }
        await singInWithGoogle.mockResolvedValue( loginData )

        await startGoogleSignIn()(dispatch)
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
        expect(dispatch).toHaveBeenCalledWith( login( loginData ) )

    })

    test('startGoogleSignIn debe llamar checkingCredentials y logout - Error', async() => {
      
        const loginData = { ok: false, errorMessage: 'Un error en Google' }
        await singInWithGoogle.mockResolvedValue( loginData )

        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
        expect(dispatch).toHaveBeenCalledWith( logout( loginData.errorMessage ) )

    })
    
    test('startLoginWithEmailPassword debe llamar checkingCredentials y login - Exito', async() => {
      
        const loginData = { ok: true, ...demoUser }
        const formData  = { email: demoUser.email, password: '123456'}

        await loginWithEmailPassword.mockResolvedValue( loginData )

        await startLoginWithEmailPassword( formData )(dispatch)
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
        expect(dispatch).toHaveBeenCalledWith( login( loginData ) )


    })
    

})
