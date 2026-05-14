import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BlobAccent from '../components/BlobAccent';
import Header from '../components/Header';
import LandingFooter from '../components/LandingFooter';

/* ---------------------------------------------------------------
 * Универсальное премиум-поле ввода
 * --------------------------------------------------------------- */
type FieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel';
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: 'text' | 'email' | 'tel' | 'numeric';
  required?: boolean;
  disabled?: boolean;
  hint?: string;
  optional?: boolean;
  icon?: string;
  trailing?: ReactNode;
  error?: string | null;
};

function Field({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
  required,
  disabled,
  hint,
  optional,
  icon,
  trailing,
  error,
}: FieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
        <span>
          {label}
          {required ? (
            <span aria-hidden className="text-primary ml-1">
              *
            </span>
          ) : null}
        </span>
        {optional ? (
          <span className="text-on-surface-variant/70 text-[11px] normal-case tracking-normal">
            необязательно
          </span>
        ) : null}
      </span>
      <span className="relative block">
        {icon ? (
          <span
            aria-hidden
            className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant"
          >
            {icon}
          </span>
        ) : null}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={`field-input ${icon ? 'has-icon' : ''} ${
            trailing ? 'has-trail' : ''
          } ${error ? 'border-error focus:border-error focus:[box-shadow:0_0_0_4px_rgba(186,26,26,0.18)]' : ''}`}
        />
        {trailing ? (
          <span className="absolute right-2 top-1/2 -translate-y-1/2">
            {trailing}
          </span>
        ) : null}
      </span>
      {error ? (
        <span id={errorId} role="alert" className="text-error flex items-center gap-1.5 text-[12px] font-medium">
          <span aria-hidden className="material-symbols-outlined text-[14px]">
            error
          </span>
          {error}
        </span>
      ) : hint ? (
        <span id={hintId} className="text-on-surface-variant text-[12px]">
          {hint}
        </span>
      ) : null}
    </label>
  );
}

/* ---------------------------------------------------------------
 * Валидаторы
 * --------------------------------------------------------------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LoginErrors = { email?: string; password?: string };
type DemoErrors = {
  email?: string;
  phone?: string;
  organization?: string;
};

function validateLogin(email: string, password: string): LoginErrors {
  const errs: LoginErrors = {};
  if (!email) errs.email = 'Введите email';
  else if (!EMAIL_RE.test(email)) errs.email = 'Похоже на ошибку — проверьте email';
  if (!password) errs.password = 'Введите пароль';
  else if (password.length < 6) errs.password = 'Минимум 6 символов';
  return errs;
}

function validateDemo(
  email: string,
  phone: string,
  organization: string
): DemoErrors {
  const errs: DemoErrors = {};
  if (!email) errs.email = 'Введите email';
  else if (!EMAIL_RE.test(email)) errs.email = 'Похоже на ошибку — проверьте email';
  if (!phone) errs.phone = 'Введите телефон';
  else if (phone.replace(/\D/g, '').length < 10)
    errs.phone = 'Телефон слишком короткий';
  if (!organization.trim()) errs.organization = 'Укажите название организации';
  return errs;
}

/* ---------------------------------------------------------------
 * Главный компонент: 3D-flip между Login и Demo
 * --------------------------------------------------------------- */
export default function LoginPage() {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [isFlipped, setIsFlipped] = useState(false);

  // login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loginErrors, setLoginErrors] = useState<LoginErrors>({});
  const [loginSubmitting, setLoginSubmitting] = useState(false);

  // demo state
  const [demoEmail, setDemoEmail] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoOrg, setDemoOrg] = useState('');
  const [demoComment, setDemoComment] = useState('');
  const [demoErrors, setDemoErrors] = useState<DemoErrors>({});
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoSent, setDemoSent] = useState(false);

  // refs для автофокуса при переключении
  const loginEmailRef = useRef<HTMLDivElement | null>(null);
  const demoEmailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.title = isFlipped
      ? 'Запросить демо · SkillPass.kz'
      : 'Вход · SkillPass.kz';
  }, [isFlipped]);

  /* Ссылки с лендинга: /login#demo — сразу показать карточку «Запросить демо» */
  useEffect(() => {
    const raw = hash.replace(/^#/, '');
    if (raw === 'demo' || raw === 'zaprosit-demo') {
      setIsFlipped(true);
    }
  }, [hash]);

  /* установка фокуса на первое поле активной стороны после переворота */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const root = isFlipped ? demoEmailRef.current : loginEmailRef.current;
      const input = root?.querySelector<HTMLInputElement>('input');
      input?.focus({ preventScroll: true });
    }, 600);
    return () => window.clearTimeout(timer);
  }, [isFlipped]);

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validateLogin(loginEmail, loginPassword);
    setLoginErrors(errs);
    if (Object.keys(errs).length) return;

    setLoginSubmitting(true);
    // Заглушка: эмулируем запрос на сервер
    window.setTimeout(() => {
      setLoginSubmitting(false);
      navigate('/');
    }, 1100);
  };

  const handleDemoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validateDemo(demoEmail, demoPhone, demoOrg);
    setDemoErrors(errs);
    if (Object.keys(errs).length) return;

    setDemoSubmitting(true);
    window.setTimeout(() => {
      setDemoSubmitting(false);
      setDemoSent(true);
    }, 1100);
  };

  const PERKS = useMemo(
    () =>
      [
        {
          icon: 'rocket_launch',
          title: 'Запуск за 3 дня',
          text: 'Импорт сотрудников и назначение курсов — без миграционной боли.',
        },
        {
          icon: 'shield',
          title: 'Защищённые данные',
          text: 'Хранение в РК, ISO 27001 ready, NDA по запросу.',
        },
        {
          icon: 'support_agent',
          title: 'Менеджер на связи',
          text: 'Личный аккаунт-менеджер с первого дня — отвечает за 15 минут.',
        },
      ] as const,
    []
  );

  return (
    <div className="bg-background text-on-background flex min-h-dvh flex-col antialiased font-body-md">
      <Header />

      <main className="flex-grow relative overflow-hidden">
        {/* Декорации фона как в Hero */}
        <div
          aria-hidden
          className="dot-grid pointer-events-none absolute inset-0 opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-32 h-[520px] w-[520px] rounded-full bg-secondary-fixed-dim/30 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-[440px] w-[440px] rounded-full bg-primary-fixed/40 blur-[120px]"
        />

        <section className="max-w-container-max relative z-10 mx-auto grid w-full grid-cols-1 items-center gap-12 px-margin-mobile py-12 md:px-margin-desktop md:py-section-padding lg:grid-cols-[1fr_minmax(420px,520px)] lg:gap-16">
          {/* LEFT — editorial-копи */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-6">
              <span className="section-index">06 / Доступ</span>
              <span aria-hidden className="hairline hidden flex-1 sm:block max-w-[24rem]" />
            </div>

            <div>
              <span className="eyebrow text-primary mb-5">
                Личный кабинет · SkillPass
              </span>
              <h1 className="font-display-xl text-on-background mb-6 leading-[1.05] tracking-tight max-md:text-[clamp(2rem,9vw,2.75rem)] md:text-[clamp(2.75rem,5vw,3.75rem)]">
                <span className="block font-extrabold">
                  {isFlipped ? 'Запросить' : 'Войти'}
                </span>
                <span className="text-on-surface-variant font-medium italic">
                  {isFlipped ? 'демо платформы' : 'в свой кабинет'}
                </span>
                <span className="block font-extrabold">
                  {isFlipped ? (
                    <BlobAccent variant="alt">за 1 минуту</BlobAccent>
                  ) : (
                    <BlobAccent>SkillPass</BlobAccent>
                  )}
                </span>
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-md text-[17px] leading-[1.65]">
                {isFlipped
                  ? 'Покажем платформу под вашу компанию за один созвон. Бесплатно, без обязательств — занимает 15 минут.'
                  : 'Войдите в личный кабинет, чтобы продолжить обучение, выдать сертификаты и контролировать прогресс сотрудников.'}
              </p>
            </div>

            <ul className="flex flex-col gap-3 [list-style:none] [padding-inline-start:0]">
              {PERKS.map(({ icon, title, text }) => (
                <li
                  key={title}
                  className="border-outline-variant/55 bg-surface-container-lowest/85 flex items-start gap-3 rounded-2xl border p-4 backdrop-blur-sm"
                >
                  <span className="bg-primary-fixed text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <span aria-hidden className="material-symbols-outlined text-[20px]">
                      {icon}
                    </span>
                  </span>
                  <span className="leading-tight">
                    <span className="text-on-background block text-[14px] font-bold">
                      {title}
                    </span>
                    <span className="text-on-surface-variant mt-0.5 block text-[13px] leading-snug">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — 3D flip-карточка */}
          <div className="flip-scene relative h-[min(85vh,820px)] min-h-[520px] w-full">
            <div
              className={`flip-card relative h-full min-h-0 sm:min-h-[520px] md:min-h-[560px] ${
                isFlipped ? 'is-flipped' : ''
              }`}
            >
              {/* FRONT — LOGIN */}
              <div
                className="flip-face flip-front h-full min-h-0"
                aria-hidden={isFlipped}
                ref={loginEmailRef}
              >
                <FormCard
                  badge="Войти"
                  badgeIcon="login"
                  title="С возвращением"
                  subtitle="Войдите по корпоративному email"
                >
                  <form
                    onSubmit={handleLoginSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <Field
                      id="login-email"
                      label="Email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="name@company.kz"
                      icon="mail"
                      required
                      value={loginEmail}
                      onChange={setLoginEmail}
                      error={loginErrors.email}
                      disabled={loginSubmitting}
                    />
                    <Field
                      id="login-password"
                      label="Пароль"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder="Минимум 6 символов"
                      icon="lock"
                      required
                      value={loginPassword}
                      onChange={setLoginPassword}
                      error={loginErrors.password}
                      disabled={loginSubmitting}
                      trailing={
                        <button
                          type="button"
                          aria-label={
                            showPassword ? 'Скрыть пароль' : 'Показать пароль'
                          }
                          onClick={() => setShowPassword((v) => !v)}
                          className="text-on-surface-variant hover:text-primary inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                        >
                          <span aria-hidden className="material-symbols-outlined text-[20px]">
                            {showPassword ? 'visibility_off' : 'visibility'}
                          </span>
                        </button>
                      }
                    />

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <label className="text-on-surface inline-flex cursor-pointer items-center gap-2 text-[13px] font-medium">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="accent-primary h-4 w-4 cursor-pointer rounded"
                          disabled={loginSubmitting}
                        />
                        Запомнить меня
                      </label>
                      <a
                        href="#forgot"
                        className="text-primary hover:text-primary-container text-[13px] font-semibold transition-colors"
                      >
                        Забыли пароль?
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={loginSubmitting}
                      className="btn-premium btn-premium--accent mt-1 w-full justify-center text-[15px]"
                    >
                      {loginSubmitting ? (
                        <>
                          <span
                            aria-hidden
                            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-on-primary border-r-transparent"
                          />
                          Входим...
                        </>
                      ) : (
                        <>
                          Войти
                          <span aria-hidden className="material-symbols-outlined text-[20px]">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>

                    <div className="relative my-2 flex items-center gap-3">
                      <span aria-hidden className="bg-outline-variant/60 h-px flex-1" />
                      <span className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-[0.18em]">
                        или
                      </span>
                      <span aria-hidden className="bg-outline-variant/60 h-px flex-1" />
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsFlipped(true)}
                      aria-controls="demo-form"
                      aria-expanded={isFlipped}
                      className="border-primary/35 text-primary hover:bg-primary-fixed/30 hover:border-primary/55 group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 bg-surface-container-lowest/70 px-5 py-3 text-[14px] font-bold transition-colors"
                    >
                      <span aria-hidden className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-180">
                        flip_camera_android
                      </span>
                      Нет доступа? Запросить демо
                    </button>

                    <p className="text-on-surface-variant text-center text-[12px] leading-relaxed">
                      Нажимая «Войти», вы соглашаетесь с{' '}
                      <a href="#" className="text-primary hover:underline">
                        условиями использования
                      </a>{' '}
                      и{' '}
                      <a href="#" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                      .
                    </p>
                  </form>
                </FormCard>
              </div>

              {/* BACK — DEMO REQUEST */}
              <div
                className="flip-face flip-back h-full min-h-0"
                aria-hidden={!isFlipped}
                ref={demoEmailRef}
                id="demo-form"
              >
                <FormCard
                  tone="dark"
                  headerLeading={
                    <button
                      type="button"
                      onClick={() => {
                        if (!demoSubmitting) setIsFlipped(false);
                      }}
                      disabled={demoSubmitting}
                      className="border-white/25 bg-white/[0.04] text-secondary-fixed-dim hover:bg-white/[0.08] hover:border-secondary-fixed-dim/45 -mt-0.5 inline-flex h-11 min-h-11 w-fit max-w-full items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-semibold leading-none transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span aria-hidden className="material-symbols-outlined shrink-0 text-[15px] leading-none">
                        arrow_back
                      </span>
                      Вернуться на вход
                    </button>
                  }
                  title={demoSent ? 'Заявка отправлена' : 'Запросить демо'}
                  subtitle={
                    demoSent
                      ? 'Мы свяжемся с вами в течение 15 минут — будьте на связи.'
                      : 'Расскажите коротко о компании — менеджер свяжется в течение 15 минут.'
                  }
                >
                  {demoSent ? (
                    <div className="flex flex-col items-center gap-5 py-6 text-center">
                      <span className="bg-secondary-container text-on-secondary-container inline-flex h-16 w-16 items-center justify-center rounded-full">
                        <span aria-hidden className="material-symbols-outlined fill-icon text-[36px]">
                          check_circle
                        </span>
                      </span>
                      <p className="text-white max-w-[28ch] text-[15px] leading-relaxed">
                        Спасибо! Мы получили вашу заявку и уже изучаем её.
                      </p>
                      <div className="flex w-full flex-col gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setDemoSent(false);
                            setIsFlipped(false);
                            setDemoEmail('');
                            setDemoPhone('');
                            setDemoOrg('');
                            setDemoComment('');
                          }}
                          className="btn-premium btn-premium--accent w-full justify-center text-[15px]"
                        >
                          Перейти ко входу
                          <span aria-hidden className="material-symbols-outlined text-[20px]">
                            login
                          </span>
                        </button>
                        <Link
                          to="/"
                          className="text-white/80 hover:text-secondary-fixed-dim inline-flex items-center justify-center gap-2 text-[13px] font-semibold transition-colors"
                        >
                          <span aria-hidden className="material-symbols-outlined text-[16px]">
                            arrow_back
                          </span>
                          На главную
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleDemoSubmit}
                      noValidate
                      className="flex flex-col gap-4"
                    >
                      <Field
                        id="demo-email"
                        label="Email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="name@company.kz"
                        icon="mail"
                        required
                        value={demoEmail}
                        onChange={setDemoEmail}
                        error={demoErrors.email}
                        disabled={demoSubmitting}
                      />
                      <Field
                        id="demo-phone"
                        label="Телефон"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+7 700 000 00 00"
                        icon="call"
                        required
                        value={demoPhone}
                        onChange={setDemoPhone}
                        error={demoErrors.phone}
                        disabled={demoSubmitting}
                      />
                      <Field
                        id="demo-org"
                        label="Организация"
                        autoComplete="organization"
                        placeholder="ТОО «Название компании»"
                        icon="apartment"
                        required
                        value={demoOrg}
                        onChange={setDemoOrg}
                        error={demoErrors.organization}
                        disabled={demoSubmitting}
                      />

                      <label
                        htmlFor="demo-comment"
                        className="flex flex-col gap-2"
                      >
                        <span className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">
                          <span>Комментарий</span>
                          <span className="text-white/45 text-[11px] normal-case tracking-normal">
                            необязательно
                          </span>
                        </span>
                        <textarea
                          id="demo-comment"
                          rows={2}
                          value={demoComment}
                          onChange={(e) => setDemoComment(e.target.value)}
                          disabled={demoSubmitting}
                          placeholder="Сколько сотрудников, какие направления интересуют..."
                          className="field-input resize-none"
                        />
                      </label>

                      <button
                        type="submit"
                        disabled={demoSubmitting}
                        className="btn-premium btn-premium--accent mt-1 w-full justify-center text-[15px]"
                      >
                        {demoSubmitting ? (
                          <>
                            <span
                              aria-hidden
                              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-on-primary border-r-transparent"
                            />
                            Отправляем...
                          </>
                        ) : (
                          <>
                            Отправить заявку
                            <span aria-hidden className="material-symbols-outlined text-[20px]">
                              send
                            </span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </FormCard>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

/* ---------------------------------------------------------------
 * Карточка-обёртка для одной грани flip-сцены
 * --------------------------------------------------------------- */
function FormCard({
  tone = 'light',
  badge,
  badgeIcon,
  headerLeading,
  title,
  subtitle,
  children,
}: {
  tone?: 'light' | 'dark';
  /** Если задан — заменяет строку с иконкой и badge (напр. «Вернуться на вход»). */
  headerLeading?: ReactNode;
  badge?: string;
  badgeIcon?: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const isDark = tone === 'dark';

  return (
    <div
      className={`relative flex min-h-0 flex-col overflow-x-hidden overflow-y-auto overscroll-contain rounded-[2rem] ${
        isDark ? 'h-full max-h-full p-6 md:p-8' : 'h-full max-h-full p-7 md:p-9'
      } ${
        isDark
          ? 'surface-immersive border border-white/15 shadow-[0_30px_70px_-25px_rgba(0,30,44,0.55)]'
          : 'border border-outline-variant/45 bg-surface-container-lowest shadow-[0_30px_70px_-25px_rgba(15,23,42,0.18)]'
      }`}
    >
      {/* Декорация-блик */}
      {isDark ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-secondary-fixed-dim/25 blur-[80px]"
        />
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-primary-fixed/40 blur-[70px]"
        />
      )}

      <header
        className={`relative flex shrink-0 flex-col ${
          headerLeading ? 'mb-4 gap-2' : 'mb-7 gap-3'
        }`}
      >
        {headerLeading ? (
          headerLeading
        ) : badge && badgeIcon ? (
          <span
            className={`section-index inline-flex items-center gap-2 ${
              isDark ? 'text-secondary-fixed-dim' : 'text-primary'
            }`}
          >
            <span aria-hidden className="material-symbols-outlined text-[16px]">
              {badgeIcon}
            </span>
            {badge}
          </span>
        ) : null}
        <h2
          className={`font-extrabold leading-tight tracking-tight ${
            headerLeading && isDark
              ? 'text-[22px] md:text-[26px]'
              : 'text-[26px] md:text-[30px]'
          } ${isDark ? 'text-white' : 'text-on-background'}`}
        >
          {title}
        </h2>
        <p
          className={`${
            headerLeading && isDark
              ? 'text-[13px] leading-snug'
              : 'text-[14px] leading-relaxed'
          } ${isDark ? 'text-white/65' : 'text-on-surface-variant'}`}
        >
          {subtitle}
        </p>
      </header>

      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}
