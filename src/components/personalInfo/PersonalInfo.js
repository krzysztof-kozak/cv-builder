import { MailIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function PersonalInfo() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-slate-900">Krzysztof Kozak</h2>
      <p className="mb-3 text-lg text-emerald-700">Self-taught programmer</p>
      <div className="flex gap-1">
        <MailIcon className="h-5 text-emerald-700" /> <p>hithard5@gmail.com</p>
      </div>

      <div className="flex gap-1">
        <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 text-emerald-700" />
        <p>linkedin.come/kris</p>
      </div>
    </section>
  );
}
