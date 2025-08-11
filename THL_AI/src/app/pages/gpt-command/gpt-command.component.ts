import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CommandInterpreterService} from '../../command-Interpreter.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gpt-command',
  templateUrl: './gpt-command.component.html',
  styleUrls: ['./gpt-command.component.scss'],
  standalone: false,
})
export class GptCommandComponent {
  userText = '';
  interpretedCommand: any;

  captchaUrl = '/api/captcha?' + Date.now();
  captchaInput = '';

  constructor(private commandInterpreterService: CommandInterpreterService,
              private router: Router,
              private http: HttpClient) {
  }

  sendCommand() {
    this.commandInterpreterService.interpret(this.userText).subscribe(res => {
      const jsonRes = res.command.replace(/```json\n?/, '').replace(/```$/, '');
      this.interpretedCommand = JSON.parse(jsonRes);
      if (this.interpretedCommand.action.includes('navigate') && this.interpretedCommand.target === 'voucher') {
        this.router.navigate(['voucher', this.interpretedCommand.target]);
      } else {
        return
      }
    });
  }

  reloadCaptcha() {
    this.captchaUrl = '/api/captcha?' + Date.now(); // prevent caching
  }

  submit() {
    this.http.post('/api/captcha/verify', {code: this.captchaInput})
      .subscribe((res: any) => {
        if (res.success) {
          alert('CAPTCHA passed');
        } else {
          alert('CAPTCHA failed');
          this.reloadCaptcha();
        }
      });
  }

}
