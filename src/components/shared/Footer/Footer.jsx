export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Services */}
        <div>
          <h6 className="footer-title mb-4 font-semibold text-lg">Services</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Branding</a></li>
            <li><a className="link link-hover">Design</a></li>
            <li><a className="link link-hover">Marketing</a></li>
            <li><a className="link link-hover">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title mb-4 font-semibold text-lg">Company</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">Jobs</a></li>
            <li><a className="link link-hover">Press kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title mb-4 font-semibold text-lg">Legal</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Terms of use</a></li>
            <li><a className="link link-hover">Privacy policy</a></li>
            <li><a className="link link-hover">Cookie policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h6 className="footer-title mb-4 font-semibold text-lg">Social</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Twitter</a></li>
            <li><a className="link link-hover">Instagram</a></li>
            <li><a className="link link-hover">Facebook</a></li>
            <li><a className="link link-hover">GitHub</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h6 className="footer-title mb-4 font-semibold text-lg">Explore</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Features</a></li>
            <li><a className="link link-hover">Enterprise</a></li>
            <li><a className="link link-hover">Security</a></li>
            <li><a className="link link-hover">Pricing</a></li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h6 className="footer-title mb-4 font-semibold text-lg">Apps</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Mac</a></li>
            <li><a className="link link-hover">Windows</a></li>
            <li><a className="link link-hover">iPhone</a></li>
            <li><a className="link link-hover">Android</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
